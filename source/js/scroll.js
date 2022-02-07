let nav = document.querySelector('.header__navigation');
let logo = document.querySelector('.logo__image');
let toggle = document.querySelector('.header__toggle');
let menuList = document.querySelector('.main-navigation');

window.addEventListener('scroll', function (event) {
  event.preventDefault();

  if (window.pageYOffset >= 1) {
    nav.classList.add('header__navigation--scroll');
    logo.classList.add('logo__image--scroll');
    toggle.classList.add('header__toggle--scroll');
    menuList.classList.add('main-navigation--scroll');
  } else {
    nav.classList.remove('header__navigation--scroll');
    logo.classList.remove('logo__image--scroll');
    toggle.classList.remove('header__toggle--scroll');
    menuList.classList.remove('main-navigation--scroll');
  }
});
