import { createContact } from './api';
import { debounce } from './debaunce';
import { createModal, errorMessege } from './renderFuctions';
const refs = {
  contactForm: document.querySelector('.contact-form'),
  backDrop: document.querySelector('.backdrop'),
  errorMessage: document.querySelector('.notvalid'),
};

const toggleModal = () => refs.backDrop.classList.toggle('is-hidden');
const createModalFunctions = () => {
  const closeModalBtn = document.querySelector('[data-modal-close]');
  toggleModal();
  const closeModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      toggleModal();
      window.removeEventListener('keydown', closeModal);
    }
  };

  window.addEventListener('keydown', closeModal);
  refs.backDrop.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', toggleModal);
};

const onSbmit = e => {
  e.preventDefault();
  const {
    email: { value: email },
    comment: { value: comment },
  } = e.target;

  createContact({ email, comment })
    .then(({ title, message }) => {
      createModal(refs.backDrop, title, message);
      createModalFunctions();
      e.target.reset();
    })
    .catch(error => {
      errorMessege(
        `Error: № ${error.message}. Please verify the information you provided and try again `
      );
    });
};

const chekValidity = debounce(e => {
  const { valid } = e.target.validity;
  if (!valid) {
    refs.errorMessage.classList.remove('is-hidden');
    e.target.classList.add('notvalid');
  } else {
    refs.errorMessage.classList.add('is-hidden');
    e.target.classList.remove('notvalid');
  }
}, 2000);

refs.contactForm.email.addEventListener('blur', () => {
  refs.errorMessage.classList.add('is-hidden');
});
refs.contactForm.email.addEventListener('input', chekValidity);
refs.contactForm.addEventListener('submit', onSbmit);
