const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
if(menu && navigation) menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open)});

const videoChoices = document.querySelectorAll('.video-choice');
videoChoices.forEach(button => button.addEventListener('click', () => {
  const target = button.dataset.videoTarget;
  videoChoices.forEach(choice => {
    const selected = choice.dataset.videoTarget === target;
    choice.setAttribute('aria-pressed', String(selected));
    choice.classList.toggle('is-selected', selected);
    const panel = document.getElementById(choice.dataset.videoTarget);
    panel.hidden = !selected;
    if (!selected) panel.querySelector('video').pause();
  });
}));


// The published library is the source of truth for both cards and categories.
const library = document.querySelector('#article-library');
if (library) initLibrary();
async function initLibrary() {
  const loading = document.querySelector('#library-loading');
  const error = document.querySelector('#library-error');
  try {
    const {site, items, topics} = await loadPublicContent();
    const categories = document.querySelector('#dynamic-categories');
    const all = `<button type="button" class="library-all" data-filter="all" aria-pressed="true"><span>全部文章</span><span>${items.length}</span></button>`;
    const groups = site.tracks.map(track => {
      const groupItems = items.filter(item => topics.get(item.topicId)?.trackId === track.id);
      if (!groupItems.length) return '';
      const children = (track.topics || []).map(topic => {
        const count = groupItems.filter(item => item.topicId === topic.id).length;
        return count ? `<button type="button" data-filter="topic" data-value="${escapeText(topic.id)}" data-label="${escapeText(topic.title)}"><span>${escapeText(topic.title)}</span><span>${count}</span></button>` : '';
      }).join('');
      return `<details class="category-group" data-group="${escapeText(track.id)}"><summary><span>${escapeText(track.title)}</span><span class="category-count">${groupItems.length}</span><span class="category-icon" aria-hidden="true"></span></summary><div class="category-children"><button type="button" data-filter="track" data-value="${escapeText(track.id)}" data-label="${escapeText(track.title)}"><span>全部${escapeText(track.title)}</span><span>${groupItems.length}</span></button>${children}</div></details>`;
    }).join('');
    const otherCount = items.filter(item => !topics.has(item.topicId)).length;
    categories.innerHTML = all + groups + (otherCount ? `<button type="button" data-filter="track" data-value="__other" data-label="其他"><span>其他</span><span>${otherCount}</span></button>` : '');
    library.innerHTML = items.map(item => {
      const topic = topics.get(item.topicId) || {trackId:'__other', trackTitle:'其他', title:'其他'};
      const tags = Array.isArray(item.tags) ? item.tags.filter(t => typeof t === 'string') : [];
      const searchable = [item.title, item.summary, item.body, topic.title, topic.trackTitle, ...tags].join(' ').toLocaleLowerCase();
      const href = articleHref(item.id);
      return `<article id="${escapeText(item.id)}" data-track="${escapeText(topic.trackId)}" data-topic="${escapeText(item.topicId || '')}" data-tags="${escapeText(JSON.stringify(tags))}" data-search="${escapeText(searchable)}"><div class="article-category"><a href="insights.html?track=${encodeURIComponent(topic.trackId)}#articles" data-track-link="${escapeText(topic.trackId)}">${escapeText(topic.trackTitle)}</a><span aria-hidden="true"> / </span><a href="insights.html?topic=${encodeURIComponent(item.topicId || '')}#articles" data-topic-link="${escapeText(item.topicId || '')}">${escapeText(topic.title)}</a></div><h3><a class="article-title-link" href="${href}">${escapeText(item.title)}</a></h3><p class="article-summary">${escapeText(item.summary || '')}</p><a class="read-link" href="${href}">閱讀文章 <span aria-hidden="true">→</span></a><div class="article-tags" aria-label="文章標籤">${tags.map(tag => `<a class="topic-tag" href="insights.html?tag=${encodeURIComponent(tag)}#articles" data-tag="${escapeText(tag)}">${escapeText(tag)}</a>`).join('')}</div></article>`;
    }).join('');
    loading.hidden = true;
    setupLibrary();
  } catch {
    loading.hidden = true; error.hidden = false;
    document.querySelector('#article-count').textContent = '';
  }
}
function setupLibrary() {
  const cards = [...library.querySelectorAll('article')];
  const search = document.querySelector('#article-search'), count = document.querySelector('#article-count'), heading = document.querySelector('#library-title'), active = document.querySelector('#active-filter'), empty = document.querySelector('#article-empty');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const params = new URLSearchParams(location.search);
  let filter = params.get('tag') ? 'tag' : params.get('topic') ? 'topic' : params.get('track') ? 'track' : 'all';
  let value = params.get(filter) || ''; search.value = params.get('q') || '';
  const normalized = text => text.trim().toLocaleLowerCase();
  function render(sync = true) {
    const words = normalized(search.value).split(/\s+/).filter(Boolean); let shown = 0;
    cards.forEach(card => {
      const category = filter === 'all' || (filter === 'track' && card.dataset.track === value) || (filter === 'topic' && card.dataset.topic === value) || (filter === 'tag' && JSON.parse(card.dataset.tags).some(t => normalized(t) === normalized(value)));
      card.hidden = !(category && words.every(word => card.dataset.search.includes(word))); if (!card.hidden) shown++;
    });
    heading.textContent = filter === 'all' ? '全部文章' : filter === 'tag' ? `標籤：${value}` : buttons.find(b => b.dataset.filter === filter && b.dataset.value === value)?.dataset.label || '全部文章';
    count.textContent = `${shown} 篇文章`; empty.hidden = shown !== 0;
    active.textContent = search.value.trim() ? `搜尋：${search.value.trim()}` : ''; active.hidden = !search.value.trim();
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter && (filter === 'all' || button.dataset.value === value))));
    const selected = cards.find(c => (filter === 'track' && c.dataset.track === value) || (filter === 'topic' && c.dataset.topic === value));
    const group = selected && [...document.querySelectorAll('.category-group')].find(g => g.dataset.group === selected.dataset.track); if (group) group.open = true;
    if (sync) { const next = new URLSearchParams(); if (filter !== 'all') next.set(filter,value); if (search.value.trim()) next.set('q',search.value.trim()); const url=location.pathname+(next.size?'?'+next:'')+location.hash; if(url!==location.pathname+location.search+location.hash) history[sync==='push'?'pushState':'replaceState'](null,'',url); }
  }
  buttons.forEach(button => button.addEventListener('click', () => {filter=button.dataset.filter; value=button.dataset.value||''; render('push');}));
  library.addEventListener('click', e => { const link=e.target.closest('[data-tag], [data-topic-link], [data-track-link]'); if (!link) return; e.preventDefault(); filter=link.dataset.tag?'tag':link.dataset.topicLink?'topic':'track'; value=link.dataset.tag||link.dataset.topicLink||link.dataset.trackLink; render('push'); document.querySelector('#articles').scrollIntoView({block:'start'}); });
  search.addEventListener('input',()=>render());
  document.querySelector('#article-search-form').addEventListener('submit',e=>{e.preventDefault();render();});
  document.querySelector('#clear-empty').addEventListener('click',()=>{filter='all';value='';search.value='';render('push');});
  window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);filter=p.get('tag')?'tag':p.get('topic')?'topic':p.get('track')?'track':'all';value=p.get(filter)||'';search.value=p.get('q')||'';render(false);});
  render(false);
}

function closeMenu(returnFocus=false){if(!menu||!navigation)return;menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');if(returnFocus)menu.focus();}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true')closeMenu(true)});
document.addEventListener('click',e=>{if(menu&&navigation&&!menu.contains(e.target)&&!navigation.contains(e.target))closeMenu()});
navigation?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.querySelectorAll('.video-panel video').forEach(video=>{
 const failed=()=>{const hint=document.querySelector('.video-help');if(hint){hint.textContent='影片暫時無法載入，請重試或使用下方連結開啟原始影片。';const a=document.createElement('a');a.href=video.querySelector('source').src;a.textContent='開啟原始影片';hint.append(' ',a)}};video.addEventListener('error',failed);video.querySelector('source')?.addEventListener('error',failed);
});
