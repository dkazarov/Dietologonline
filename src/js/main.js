'use strict';

import burger from './burger';

burger();

const card = document.querySelectorAll('.problems-card');

card.forEach(item => {
	item.addEventListener('click', e => {
		if (e.target.classList.contains('active')) {
			e.target.classList.remove('active');
			return;
		}
		card.forEach(e => e.classList.remove('active'));
		e.currentTarget.classList.add('active');
	});
});
