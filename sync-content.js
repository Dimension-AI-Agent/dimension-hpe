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
