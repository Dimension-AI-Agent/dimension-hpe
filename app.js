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
