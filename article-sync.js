const articleRoot = document.querySelector('#dynamic-article');
if (articleRoot) loadArticle();
function inlineArticle(value) {
  return escapeText(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (_, label, url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`);
}
function articleBody(value) {
  const lines = String(value || '').split(/\r?\n/); let html = '', list = '';
  const closeList = () => { if (list) { html += `</${list}>`; list = ''; } };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { closeList(); continue; }
    if (line.startsWith('|') && i + 1 < lines.length && /^\|?[\s:|-]+\|?$/.test(lines[i+1].trim())) {
      closeList(); const cells = row => row.replace(/^\||\|$/g,'').split('|').map(cell=>cell.trim());
      const header = cells(line); html += '<table><thead><tr>' + header.map(cell=>`<th>${inlineArticle(cell)}</th>`).join('') + '</tr></thead><tbody>'; i++;
      while (i+1<lines.length && lines[i+1].trim().startsWith('|')) { i++; html += '<tr>'+cells(lines[i].trim()).map(cell=>`<td>${inlineArticle(cell)}</td>`).join('')+'</tr>'; }
      html += '</tbody></table>'; continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) { closeList(); const level=Math.max(2,heading[1].length); html += `<h${level}>${inlineArticle(heading[2])}</h${level}>`; continue; }
    const bullet = line.match(/^[-*]\s+(.+)$/), numbered = line.match(/^\d+[.)]\s+(.+)$/);
    if (bullet || numbered) { const kind=bullet?'ul':'ol'; if (list !== kind) {closeList();list=kind;html+=`<${kind}>`;} html+=`<li>${inlineArticle((bullet||numbered)[1])}</li>`;continue; }
    closeList(); if (line.startsWith('> ')) html+=`<blockquote><p>${inlineArticle(line.slice(2))}</p></blockquote>`; else html += `<p>${inlineArticle(line)}</p>`;
  }
  closeList(); return html;
}

async function loadArticle() {
  try {
    const id = new URLSearchParams(location.search).get('id') || /^article-(material-\d+)\.html$/.exec(location.pathname.split('/').pop())?.[1];
    const {items,topics} = await loadPublicContent();
    const item = items.find(entry => entry.id === id);
    if (!item) {articleRoot.innerHTML='<h1>找不到這篇文章</h1><p>這篇文章可能已下架或網址有誤。</p>';return;}
    const topic = topics.get(item.topicId) || {title:'其他',trackTitle:'其他',trackId:'__other'};
    const tags = Array.isArray(item.tags) ? item.tags.filter(tag=>typeof tag === 'string') : [];
    const files = Array.isArray(item.files) ? item.files : [];
    const links = Array.isArray(item.links) ? item.links : [];
    const attachments = files.map(file => {
      const url = assetUrl(file.file); if (!url) return '';
      const src=escapeText(url), name=escapeText(file.name || '附件');
      const media=file.kind==='image'?`<img src="${src}" alt="${name}" loading="lazy">`:file.kind==='video'?`<video controls preload="none" src="${src}"></video>`:file.kind==='audio'?`<audio controls preload="none" src="${src}"></audio>`:'';
      return `<p>${media}<br><a href="${src}" target="_blank" rel="noopener noreferrer">開啟附件：${name} ↗</a></p>`;
    }).join('') + links.map(link=>{const url=publicUrl(link);return url?`<p><a href="${escapeText(url)}" target="_blank" rel="noopener noreferrer">開啟素材連結 ↗</a></p>`:'';}).join('');
    document.title=`${item.title}｜訊達文章`;
    articleRoot.innerHTML=`<p class="article-category"><a href="insights.html?track=${encodeURIComponent(topic.trackId)}#articles">${escapeText(topic.trackTitle)}</a> / <a href="insights.html?topic=${encodeURIComponent(item.topicId || '')}#articles">${escapeText(topic.title)}</a></p><h1>${escapeText(item.title)}</h1><p class="reading-lede">${escapeText(item.summary || '')}</p><nav class="reading-tags article-tags" aria-label="文章標籤">${tags.map(tag=>`<a class="topic-tag" href="insights.html?tag=${encodeURIComponent(tag)}#articles">${escapeText(tag)}</a>`).join('')}</nav><div class="article-body">${articleBody(item.body)}${attachments ? `<h2>相關圖片與附件</h2>${attachments}`:''}</div>`;
  } catch { articleRoot.innerHTML='<h1>文章暫時無法載入</h1><p>請重新整理後再試。</p>'; }
}
