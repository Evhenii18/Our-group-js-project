import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

const errorMessege = str =>
  iziToast.warning({
    message: str,
    position: 'topRight',
    backgroundColor: '#e74a3b',
    messageColor: '#FAFAFB',
    messageLineHeight: '24px',
    maxWidth: '310px',
    theme: 'dark',
    timeout: 200000,
  });

const createModal = (element, title, message) => {
  const markup = `
  <div class="modal">
    <button class="modal-btn-close" data-modal-close>
      <svg class="modal-close" width="24" height="24">
        <use href="./img/sprite.svg#close-modal"></use>
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
