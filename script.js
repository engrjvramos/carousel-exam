'use strict';

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.img');

let slideIndex = 0;

const playCarousel = () => {
	images.forEach((image) => {
		image.style.display = 'none';
	});

	slideIndex++;

	if (slideIndex > images.length) {
		slideIndex = 1;
	}

	images[slideIndex - 1].style.display = 'grid';
	setTimeout(playCarousel, 1500);
};

playCarousel();
