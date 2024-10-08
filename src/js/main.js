'use strict';

import burger from './burger';

burger();

const card = document.querySelectorAll('.problems-card');

const acoordeonOn = () => {
	card.forEach(elem => {
		elem.addEventListener('click', event => {
			const content = document.querySelector('.problems-card__content');

			const current = event.currentTarget;
			current.classList.toggle('active');
			content.style = content.scrollHeight + 'px';

			// current.classList.remove('active');
		});
	});
};

acoordeonOn();
