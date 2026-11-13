// C's section rail follows the current homepage section.
const cRail=[...document.querySelectorAll('.page-rail a')];
if(cRail.length&&'IntersectionObserver'in window){const io=new IntersectionObserver(entries=>entries.filter(e=>e.isIntersecting).forEach(e=>cRail.forEach(a=>{if(a.hash==='#'+e.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})),{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('main>section[id]').forEach(s=>io.observe(s));}
// Article outline is derived from existing source headings; article copy is untouched.
const article=document.querySelector('#dynamic-article'),outline=document.querySelector('.reading-outline');
if(article&&outline){
 const buildOutline=()=>{const headings=[...article.querySelectorAll('.article-body h2')];outline.hidden=headings.length<2;article.closest('.reading-wrap')?.classList.toggle('has-outline',headings.length>=2);if(headings.length<2)return;const nav=outline.querySelector('nav');nav.replaceChildren(...headings.map((h,i)=>{if(!h.id)h.id='article-section-'+(i+1);const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;return a}));};
 outline.querySelector('details').open=window.matchMedia('(min-width:1001px)').matches;
 new MutationObserver(buildOutline).observe(article,{childList:true,subtree:true});buildOutline();
}
