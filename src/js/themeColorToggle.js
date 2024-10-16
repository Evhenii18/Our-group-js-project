const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

const addClassList = (element, darkClass) =>
  localStorage.getItem('theme') === 'dark' && element.classList.add(darkClass);

const themeColorToggle = () => {
  toggleButton.classList.toggle('active-btn');
  body.classList.toggle('dark-theme');

  body.classList.contains('dark-theme')
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
};

addClassList(body, 'dark-theme');
addClassList(toggleButton, 'active-btn');
toggleButton.addEventListener('click', themeColorToggle);
export default themeColorToggle;

/* check */
