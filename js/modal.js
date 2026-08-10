document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) {
    return;
  }

  const openModal = () => {
    refs.modal.classList.add('is-open');
    document.addEventListener('keydown', onEscKeyDown);
  };

  const closeModal = () => {
    refs.modal.classList.remove('is-open');
    document.removeEventListener('keydown', onEscKeyDown);
  };

  function onEscKeyDown(event) {
    if (event.code === 'Escape' || event.key === 'Escape') {
      closeModal();
    }
  }

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  refs.modal.addEventListener('click', event => {
    if (event.target === refs.modal) {
      closeModal();
    }
  });
});
