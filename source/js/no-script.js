// Здесь находятся правила, для удаления классов, которые предназначены для сайта без использования javascript
let headerNoJs = document.querySelector('.header--no-js')
let logoNoJs = document.querySelector('.logo__image--no-js')
let headerToggleNoJs = document.querySelector('.header__toggle--no-js')
let loginNoJs = document.querySelector('.user-navigation__log-in--no-js')
let headerNavigationNoJs = document.querySelector('.header__navigation--no-js')
let navigationMenuNoJs = document.querySelector('.header__navigation-wrapper--no-js')

headerNoJs.classList.remove("header--no-js");

logoNoJs.classList.remove("logo__image--no-js");

headerToggleNoJs.classList.remove("header__toggle--no-js");

loginNoJs.classList.remove("user-navigation__log-in--no-js");

headerNavigationNoJs.classList.remove("header__navigation--no-js");

navigationMenuNoJs.classList.remove("header__navigation-wrapper--no-js");
