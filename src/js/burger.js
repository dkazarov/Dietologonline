const burgerButton = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger__line');
const headerNav = document.querySelector('.header__nav');
const navItems = document.querySelectorAll('.header-nav__item');
const body = document.body;

const burger = () => {
	burgerButton.addEventListener('click', () => {
		burgerLines.classList.toggle('burger--transform');
		burgerButton.classList.toggle('burger--transform');
		headerNav.classList.toggle('header__nav--toogle');
		body.classList.toggle('disable-scroll');

		console.log(burgerButton);

		scrollOn();
	});

	navItems.forEach(elem => {
		elem.addEventListener('click', () => {
			headerNav.classList.remove('header__nav--toogle');
			body.classList.remove('disable-scroll');
			burgerLines.classList.remove('burger--transform');
			burgerButton.classList.remove('burger--transform');
		});
	});
};

const scrollOn = () => {
	burgerButton.addEventListener('.click', () => {});
};

export default burger;
