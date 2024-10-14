import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import 'normalize.css';

import './js/work-together/workTogetther';
import './js/faq/faq.js';
import './js/my-projects/myProjects';


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



