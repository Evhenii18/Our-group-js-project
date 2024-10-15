const refs = {
  projectsList: document.querySelector('.projects-list'),
};

export const fullProjects = [
  {
    title: 'power pulse webservice',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'mimino website',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'vyshyvanka vibes Landing Page',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'green harvest online store',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'wallet webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'chego jewelry website',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'energy flow webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'fruitbox online store',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'English excellence webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    title: 'starlight studio landing page',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
];

export const smoothScroll = () => {
  let cardHeight =
    refs.projectsList.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
};

export const renderProjects = num => {
  const step = 3;
  let markup = '';
  fullProjects.slice(num, num + step).map((project, idx) => {
    const folderPosition = idx + num + 1;

    markup += `<li class="projects-item">
      <img
        src="/img/pj-${folderPosition}-min.jpg"
        srcset="/img/pj-${folderPosition}-min.jpg 1x, /img/pj-${folderPosition}@2x-min.jpg 2x"
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${project.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${project.title}</h3>
        <a class="projects-link" href="${project.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="/img/sprite.svg#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`;
  });
  refs.projectsList.insertAdjacentHTML('beforeend', markup);
};
// check
