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
        if (all) return `<article><div><span class="product-label">${topic}</span><h2>${title}</h2><p>${summary}</p></div><div><h3>了解案例</h3><p>從企業需求、訊達規劃與專案內容，了解這個案例。</p><a class="action outline" href="${href}">閱讀完整案例 →</a></div></article>`;
        return `<article><span class="product-label">${topic}</span><h3>${title}</h3><p>${summary}</p><a href="${href}">閱讀案例 →</a></article>`;
      }).join('');
    });
  }).catch(() => {
    caseLists.forEach(list => { list.innerHTML = '<p>案例暫時無法載入，請重新整理後再試。</p>'; });
  });
}
