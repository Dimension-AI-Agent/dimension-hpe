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

// Article library filters and shareable links
const library = document.querySelector('#article-library');
if (library) {
  const cards = [...library.querySelectorAll('article')];
  const search = document.querySelector('#article-search');
  const count = document.querySelector('#article-count');
  const heading = document.querySelector('#library-title');
  const active = document.querySelector('#active-filter');
  const empty = document.querySelector('#article-empty');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const initial = new URLSearchParams(location.search);
  let filter = initial.get('tag') ? 'tag' : initial.get('topic') ? 'topic' : initial.get('track') ? 'track' : 'all';
  let value = initial.get(filter) || '';
  search.value = initial.get('q') || '';
  const normalized = text => text.trim().toLocaleLowerCase();
  function labelFor() {
    if (filter === 'all') return '全部文章';
    if (filter === 'tag') return `標籤：${value}`;
    return buttons.find(b => b.dataset.filter === filter && b.dataset.value === value)?.dataset.label || '全部文章';
  }
  function render(syncUrl = true) {
    const words = normalized(search.value).split(/\s+/).filter(Boolean);
    let shown = 0;
    cards.forEach(card => {
      const categoryMatches = filter === 'all' || (filter === 'track' && card.dataset.track === value) || (filter === 'topic' && card.dataset.topic === value) || (filter === 'tag' && JSON.parse(card.dataset.tags).some(t => normalized(t) === normalized(value)));
      const visible = categoryMatches && words.every(word => card.dataset.search.includes(word));
      card.hidden = !visible;
      if (visible) shown++;
    });
    const label = labelFor();
    heading.textContent = label;
    count.textContent = `${shown} 篇文章`;
    empty.hidden = shown !== 0;
    const term = search.value.trim();
    active.textContent = term ? `搜尋：${term}` : '';
    active.hidden = !term;
    buttons.forEach(button => {
      const selected = button.dataset.filter === filter && (filter === 'all' || button.dataset.value === value);
      button.setAttribute('aria-pressed', String(selected));
    });
    const selectedCard = cards.find(c => (filter === 'track' && c.dataset.track === value) || (filter === 'topic' && c.dataset.topic === value));
    if (selectedCard) {
      const group = [...document.querySelectorAll('.category-group')].find(g => g.dataset.group === selectedCard.dataset.track);
      if (group) group.open = true;
    }
    if (syncUrl) {
      const params = new URLSearchParams();
      if (filter !== 'all') params.set(filter, value);
      if (term) params.set('q', term);
      const query = params.toString();
      history.replaceState(null, '', location.pathname + (query ? '?' + query : '') + location.hash);
    }
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    value = button.dataset.value || '';
    search.value = '';
    render();
  }));
  library.addEventListener('click', event => {
    const link = event.target.closest('[data-tag], [data-topic-link], [data-track-link]');
    if (!link) return;
    event.preventDefault();
    filter = link.dataset.tag ? 'tag' : link.dataset.topicLink ? 'topic' : 'track';
    value = link.dataset.tag || link.dataset.topicLink || link.dataset.trackLink;
    search.value = '';
    render();
    document.querySelector('#articles').scrollIntoView({block:'start'});
  });
  search.addEventListener('input', () => render());
  document.querySelector('#article-search-form').addEventListener('submit', event => {event.preventDefault();render();});
  document.querySelector('#clear-empty').addEventListener('click', () => {filter='all';value='';search.value='';render();});
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(location.search);
    filter = params.get('tag') ? 'tag' : params.get('topic') ? 'topic' : params.get('track') ? 'track' : 'all';
    value = params.get(filter) || '';
    search.value = params.get('q') || '';
    render(false);
  });
  render(false);
}
