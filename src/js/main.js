'use strict';

const burgerButton = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger__line');
const headerNav = document.querySelector('.header__nav');

burgerButton.addEventListener('click', () => {
	burgerLines.classList.toggle('burger--transform');
	burgerButton.classList.toggle('burger--transform');
	headerNav.classList.toggle('header__nav--toogle');
});
