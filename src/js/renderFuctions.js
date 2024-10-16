import iconPath from '../img/sprite.svg';
import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const errorMessege = ({ title, message }) =>
  iziToast.warning({
    title,
    message,
    position: 'topRight',
    backgroundColor: '#e74a3b',
    messageColor: '#FAFAFB',
    messageLineHeight: '24px',
    maxWidth: '310px',
    theme: 'dark',
  });

const createModal = (element, title, message) => {
  const markup = `
  <div class="modal">
    <button class="modal-btn-close" data-modal-close>
      <svg class="modal-close" width="24" height="24">
        <use href="${iconPath}#close-modal"></use>
      </svg>
    </button>
    <h3 class="modal-title">${title}</h3>
    <p class="modal-text">
      ${message}
    </p>
  </div>`;
  element.innerHTML = markup;
};

export { errorMessege, createModal };
