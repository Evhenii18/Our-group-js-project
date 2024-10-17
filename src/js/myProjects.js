import { fullProjects, renderProjects, smoothScroll } from './renderProjects';

const refs = {
  loadBtn: document.querySelector('#load-more'),
};

let count = 3;

const onHandleClick = e => {
  renderProjects(count);
  smoothScroll(1);
  count += 3;
  if (count > fullProjects.length) {
    smoothScroll(0);
    e.target.classList.add('is-hidden');
    return;
  }
};

refs.loadBtn.addEventListener('click', onHandleClick);
