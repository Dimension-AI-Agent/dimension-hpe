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

// Article library filters
const articleSearch = document.querySelector('#article-search');
const articleFilter = document.querySelector('#article-filter');
const libraryCards = [...document.querySelectorAll('#article-library article')];
if (articleSearch && articleFilter) {
  const updateArticles = () => {
    const term = articleSearch.value.trim().toLocaleLowerCase();
    let shown = 0;
    libraryCards.forEach(card => {
      const visible = (!term || card.dataset.search.includes(term)) && (articleFilter.value === 'all' || card.dataset.track === articleFilter.value);
      card.hidden = !visible;
      if (visible) shown++;
    });
    document.querySelector('#article-count').textContent = `共 ${shown} 篇`;
    document.querySelector('#article-empty').hidden = shown !== 0;
  };
  articleSearch.addEventListener('input', updateArticles);
  articleFilter.addEventListener('change', updateArticles);
}
