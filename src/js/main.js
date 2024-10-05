'use strict';

const burgerButton = document.querySelector('.burger ')
const headerNav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', ()=> {
  headerNav.classList.toggle('header__nav--toogle');
})