import iconPath from './img/sprite.svg';
const refs = {
  projectsList: document.querySelector('.projects-list'),
};

const importImg = async num => {
  try {
    const pathImg = await import(`./img/pj-${num}-min.jpg`);
    const pathImg2x = await import(`./img/pj-${num}@2x-min.jpg`);
    return { default: pathImg.default, default2x: pathImg2x.default };
  } catch (error) {
    console.error('Error loading image:', error);
  }
};
const makeAtributes = async num => {
  const imgPath = await importImg(num);
  return `src=".${imgPath.default}" 
  srcset=".${imgPath.default2x}"`;
};

export const fullProjects = [
  {
    id: 1,
    title: 'power pulse webservice',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 2,
    title: 'mimino website',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 3,
    title: 'vyshyvanka vibes Landing Page',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 4,
    title: 'green harvest online store',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 5,
    title: 'wallet webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 6,
    title: 'chego jewelry website',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 7,
    title: 'energy flow webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 8,
    title: 'fruitbox online store',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 9,
    title: 'English excellence webservice ',
    stacks: 'React, JavaScript, Node JS, Git',
    link: '#',
  },
  {
    id: 10,
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

export const renderProjects = async num => {
  const step = 3;
  let markup = '';
  const projectsToRender = fullProjects.slice(num, num + step);
  for (let idx = 0; idx < projectsToRender.length; idx++) {
    const project = projectsToRender[idx];
    const folderPosition = project.id;
    const imgAttributes = await makeAtributes(folderPosition);
    console.log(imgAttributes);
    markup += `<li class="projects-item">
      <img
         ${imgAttributes}
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${project.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${project.title}</h3>
        <a class="projects-link" href="${project.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="${iconPath}#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`;
  }
  refs.projectsList.insertAdjacentHTML('beforeend', markup);
};
// check
