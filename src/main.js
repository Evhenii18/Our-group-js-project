import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import 'normalize.css';
// switch-bt
// switch-bt
import './js/workTogetther';
import './js/faq.js';
import './js/myProjects';
import './js/themeColorToggle.js';
import { parseReviews } from './js/reviews.js';

const modalBtn = document.querySelector('.menu-icon-btn');
const closeModal = document.querySelector('.header-modal-btn');
const modal = document.querySelector('.header-modal');
const navLinks = document.querySelectorAll('.modal-list-item a');
const body = document.querySelector('body');

modalBtn.addEventListener('click', toggleMenu);
closeModal.addEventListener('click', closeMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));

function toggleMenu() {
  modal.classList.toggle('is-visible');
  body.classList.toggle('body-hidden');
}

function closeMenu() {
  modal.classList.remove('is-visible');
  body.classList.remove('body-hidden');
}

// DARK MODE

const darkModeBtn = document.querySelector('.dark-mode-btn');

darkModeBtn.addEventListener('click', function() {
  // Переключаем класс для темной темы
  darkModeBtn.classList.toggle('dark-mode-active');

  // Дополнительно: можно переключать темную тему на всем сайте
  document.body.classList.toggle('dark-mode');
});

parseReviews();