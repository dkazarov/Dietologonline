'use strict';

import burger from './burger';

burger();

const card = document.querySelectorAll('.problems-card');

card.forEach(item => {
	item.addEventListener('click', () => {
		card.forEach(item => {
			item.addEventListener('click', e => {
				e.currentTarget.classList.toggle('active');
			});
		});

		card.forEach(e => e.classList.remove('active'));
	});
});
