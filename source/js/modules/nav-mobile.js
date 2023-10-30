const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const navLinks = document.querySelectorAll('.main-nav__link');

function initNavMobile() {
  const onOpenMenu = () => {
    document.querySelector('body').classList.add('modal__open');
    document.querySelector('body').classList.add('modal__overlay');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  };

  function onCloseMenu() {
    document.querySelector('body').classList.remove('modal__open');
    document.querySelector('body').classList.remove('modal__overlay');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      onOpenMenu();
    } else {
      onCloseMenu();
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', onCloseMenu);
  });

  window.addEventListener('click', function (evt) {
    if (!evt.target.closest('.main-nav')) {
      onCloseMenu();
    }
  });
}


export {initNavMobile};
