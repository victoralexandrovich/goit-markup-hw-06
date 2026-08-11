document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mobile-menu-open]'),
    closeMenuBtns: document.querySelectorAll('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-mobile-menu]'),
  };

  if (!refs.openMenuBtn || !refs.menu) {
    return;
  }

  const openMenu = () => {
    refs.menu.classList.add('is-open');
    document.addEventListener('keydown', onEscKeyDown);
  };

  const closeMenu = () => {
    refs.menu.classList.remove('is-open');
    document.removeEventListener('keydown', onEscKeyDown);
  };

  function onEscKeyDown(event) {
    if (event.code === 'Escape' || event.key === 'Escape') {
      closeMenu();
    }
  }

  refs.openMenuBtn.addEventListener('click', openMenu);
  refs.closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });
});
