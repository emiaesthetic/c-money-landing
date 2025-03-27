export const initModal = () => {
  const modal = document.querySelector('.mobile-overlay');
  const menu = modal.querySelector('.menu__list');

  menu.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('menu__link')) return;
    modal.close();
  });
};
