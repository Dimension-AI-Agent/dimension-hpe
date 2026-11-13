const caseLists = document.querySelectorAll('[data-case-list]');
const caseTopicIds = new Set(['xunda-customer-cases', 'xunda-self-adoption']);
if (caseLists.length) {
  loadPublicContent().then(({items, topics}) => {
    // material-13 remains excluded until its actual-use status is verified.
    const cases = items.filter(item => caseTopicIds.has(item.topicId) && item.id !== 'material-13');
    caseLists.forEach(list => {
      const all = list.dataset.caseList === 'all';
      const ids = (list.dataset.caseList || '').split(',').map(id => `material-${id.trim()}`);
      const selected = all ? cases : ids.map(id => cases.find(item => item.id === id)).filter(Boolean);
      if (!selected.length) {
        list.innerHTML = '<p>目前沒有可顯示的案例。</p>';
        return;
      }
      list.innerHTML = selected.map(item => {
        const title = escapeText(item.title);
        const summary = escapeText(item.summary || '');
        const topic = escapeText(topics.get(item.topicId)?.title || '訊達成功案例');
        const href = escapeText(articleHref(item.id));
        if (all) {
          const files = Array.isArray(item.files) ? item.files : [];
          const video = files.find(file => file.kind === 'video' && assetUrl(file.file));
          const image = files.find(file => file.kind === 'image' && assetUrl(file.file));
          const poster = ['material-53','material-60','material-61','material-62','material-63','material-64','material-65','material-66'].includes(item.id) ? `assets/case-previews/${item.id}.jpg` : '';
          const media = video ? `<div class="case-player"><button class="case-play" type="button" data-video="${escapeText(assetUrl(video.file))}" data-poster="${poster}" aria-label="播放案例影片：${title}">${poster || image ? `<img src="${poster || escapeText(assetUrl(image.file))}" alt="" loading="lazy">` : ''}<span class="case-play-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 11 7-11 7Z"/></svg>播放案例影片</span></button><p class="case-media-error" hidden>影片暫時無法播放，請<a href="${escapeText(assetUrl(video.file))}" target="_blank" rel="noopener noreferrer">開啟原始影片</a>，或閱讀完整案例。</p></div>` : image ? `<a class="case-image" href="${href}" aria-label="閱讀完整案例：${title}"><img src="${escapeText(assetUrl(image.file))}" alt="${title}相關圖片" loading="lazy"></a>` : '';
          return `<article><div><span class="product-label">${topic}</span><h2>${title}</h2><p>${summary}</p></div><div class="case-preview">${media}<a class="action outline" href="${href}">閱讀完整案例 </a></div></article>`;
        }
        return `<article><span class="product-label">${topic}</span><h3>${title}</h3><p>${summary}</p><a href="${href}">閱讀案例 </a></article>`;
      }).join('');
      list.querySelectorAll('.case-play').forEach(button => button.addEventListener('click', () => {
        const player = document.createElement('video');
        player.controls = true;
        player.playsInline = true;
        player.preload = 'none';
        player.src = button.dataset.video;
        player.poster = button.dataset.poster;
        player.setAttribute('aria-label', button.getAttribute('aria-label').replace('播放案例影片：', '案例影片：'));
        const error = button.parentElement.querySelector('.case-media-error');
        player.addEventListener('error', () => { error.hidden = false; });
        player.addEventListener('play', () => document.querySelectorAll('.case-player video').forEach(other => { if (other !== player) other.pause(); }));
        button.replaceWith(player);
        player.tabIndex = 0;
        player.focus({preventScroll: true});
        player.play().catch(() => { if (player.error) error.hidden = false; });
      }));
    });
  }).catch(() => {
    caseLists.forEach(list => { list.innerHTML = '<p>案例暫時無法載入，請重新整理後再試。</p>'; });
  });
}
