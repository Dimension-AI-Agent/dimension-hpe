const publicContentBase = 'https://dimension-ai-agent.github.io/ai-marketing-website-public/';
const escapeText = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
async function loadPublicContent() {
  const get = async path => {
    const response = await fetch(publicContentBase + path, {cache: 'no-store'});
    if (!response.ok) throw new Error('內容資料暫時無法取得');
    return response.json();
  };
  const [site, materials] = await Promise.all([get('data/site.json'), get('data/materials.json')]);
  if (!Array.isArray(materials) || !Array.isArray(site.tracks)) throw new Error('資料格式不正確');
  const topics = new Map();
  site.tracks.forEach(track => (track.topics || []).forEach(topic => topics.set(topic.id, {id: topic.id, title: topic.title, trackId: track.id, trackTitle: track.title})));
  const brandText = value => typeof value === 'string' ? value.replace(/HPE\s+GreenLake/g, 'GreenLake') : value;
  const items = materials.filter(item => item.status === '已核准' && typeof item.id === 'string' && typeof item.title === 'string').map(item => ({...item,title:brandText(item.title),summary:brandText(item.summary),body:brandText(item.body),tags:Array.isArray(item.tags)?item.tags.map(brandText):item.tags}));
  return {site, items, topics};
}
function articleHref(id) { return `article.html?id=${encodeURIComponent(id)}`; }
function publicUrl(value) {
  try { const u = new URL(value); return ['http:', 'https:'].includes(u.protocol) && !u.username && !u.password ? u.href : ''; } catch { return ''; }
}
function assetUrl(value) {
  if (typeof value !== 'string') return '';
  try {
    const decoded = decodeURIComponent(value);
    if (!decoded.startsWith('assets/materials/') || /[%\\\u0000-\u001f]/.test(decoded) || decoded.split('/').some(part => !part || part === '.' || part === '..')) return '';
    return publicContentBase + decoded.split('/').map(encodeURIComponent).join('/');
  } catch { return ''; }
}

// Display dates approved for the November article rollout, keyed by content ID.
const arrangedArticleDates = new Map([
  ['material-5', '2026-11-01T09:12:00+08:00'],
  ['material-46', '2026-11-02T09:50:00+08:00'],
  ['material-48', '2026-11-02T14:59:00+08:00'],
  ['material-44', '2026-11-02T15:26:00+08:00'],
  ['material-47', '2026-11-03T12:10:00+08:00'],
  ['material-50', '2026-11-03T13:17:00+08:00'],
  ['material-49', '2026-11-04T10:16:00+08:00'],
  ['material-45', '2026-11-04T14:56:00+08:00'],
  ['material-41', '2026-11-05T12:37:00+08:00'],
  ['material-40', '2026-11-05T14:26:00+08:00'],
  ['material-18', '2026-11-06T09:28:00+08:00'],
  ['material-22', '2026-11-06T16:02:00+08:00'],
  ['material-25', '2026-11-07T17:12:00+08:00'],
  ['material-20', '2026-11-09T12:36:00+08:00'],
  ['material-35', '2026-11-09T14:25:00+08:00'],
  ['material-33', '2026-11-09T16:32:00+08:00'],
  ['material-34', '2026-11-10T09:42:00+08:00'],
  ['material-36', '2026-11-10T17:25:00+08:00'],
  ['material-37', '2026-11-11T10:39:00+08:00'],
  ['material-38', '2026-11-11T14:55:00+08:00'],
  ['material-39', '2026-11-12T15:04:00+08:00'],
  ['material-16', '2026-11-12T17:18:00+08:00'],
  ['material-19', '2026-11-13T09:45:00+08:00'],
  ['material-21', '2026-11-13T13:46:00+08:00'],
  ['material-23', '2026-11-13T14:34:00+08:00'],
  ['material-24', '2026-11-16T15:48:00+08:00'],
  ['material-26', '2026-11-16T17:10:00+08:00'],
  ['material-28', '2026-11-18T09:11:00+08:00'],
  ['material-29', '2026-11-18T17:14:00+08:00'],
  ['material-30', '2026-11-19T11:24:00+08:00'],
  ['material-31', '2026-11-19T12:40:00+08:00'],
  ['material-32', '2026-11-20T14:05:00+08:00'],
  ['material-27', '2026-11-20T16:59:00+08:00'],
  ['material-53', '2026-11-21T09:15:00+08:00'],
  ['material-13', '2026-11-22T14:42:00+08:00'],
  ['material-61', '2026-11-23T11:36:00+08:00'],
  ['material-62', '2026-11-23T12:13:00+08:00'],
  ['material-63', '2026-11-24T11:16:00+08:00'],
  ['material-64', '2026-11-24T12:28:00+08:00'],
  ['material-65', '2026-11-25T09:28:00+08:00'],
  ['material-66', '2026-11-25T16:13:00+08:00'],
  ['material-60', '2026-11-26T13:29:00+08:00'],
]);
const articleDateFormatter = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Taipei',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function articleUpdateTimestamp(item) {
  const value = arrangedArticleDates.get(item.id) ?? item.updatedAt;
  const timestamp = typeof value === 'string' ? Date.parse(value) : NaN;
  return Number.isFinite(timestamp) ? timestamp : null;
}

function renderArticleUpdate(item, detail = false) {
  const timestamp = articleUpdateTimestamp(item);
  if (timestamp === null) return '';
  const date = articleDateFormatter.format(timestamp);
  const displayDate = date.replaceAll('-', '/');
  const scope = detail ? 'article-date--detail' : 'article-date--list';
  return `<p class="article-date ${scope}"><span>更新時間</span><time datetime="${date}">${displayDate}</time></p>`;
}
