let headerToggle = document.querySelector('.header__toggle')
let page = document.querySelector('.page')
let header = document.querySelector('.header')
let logoImage = document.querySelector('.logo__image')
let headerNavigation = document.querySelector('.header__navigation-wrapper')

headerToggle.onclick = function () {
  headerToggle.classList.toggle('header__toggle--js');
  page.classList.toggle('show-main-nav');
  header.classList.toggle('header--js');
  logoImage.classList.toggle('logo__image--js');
  headerNavigation.classList.toggle('header__navigation-wrapper--js');
}
