const burgerButton = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger__line');
const headerNav = document.querySelector('.header__nav');
const navItems = document.querySelectorAll('.header-nav__item');

const burger = () => {
	burgerButton.addEventListener('click', () => {
		burgerLines.classList.toggle('burger--transform');
		burgerButton.classList.toggle('burger--transform');
		headerNav.classList.toggle('header__nav--toogle');
	});

	navItems.forEach(elem => {
		elem.addEventListener('click', () => {
			headerNav.classList.remove('header__nav--toogle');
		});
	});
};

export default burger;
