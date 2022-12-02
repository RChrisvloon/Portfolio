'use strict';

// Elements
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const logoImg = document.getElementById('nav_logoImg');
const hamburgerBtn = document.getElementById('nav_menuBtn');

const introSection = document.querySelector('.intro');
const intro_header = document.getElementById('intro_header');
const intro_subheader = document.getElementById('intro_subheader');
const intro_information = document.getElementById('intro_information');

const backToTop_btn = document.getElementById('backToTop_btn');

// Sticky navigation eventlistener
window.addEventListener('scroll', function () {
	if (window.scrollY > 0) {
		nav.classList.add('sticky');

		// Change logo and hamburgermenu_icon to dark version
		logoImg.src = 'images/computer_black.svg';
		hamburgerBtn.src = 'images/menu_black.svg';

		// Show the back to the top button
		backToTop_btn.style.display = 'block';
	} else {
		nav.classList.remove('sticky');
		// Change logo and hamburgermenu_icon to white version
		logoImg.src = 'images/computer_white.svg';
		hamburgerBtn.src = 'images/menu_white.svg';

		// Hide the back to the top button
		backToTop_btn.style.display = 'none';
	}
});

// Scroll back to top button
const scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Reveal section animation
const allSections = document.querySelectorAll('.section_inner');
const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) {
		return;
	}

	// Remove hidden class & stop observing specific section
	entry.target.classList.remove('section_hidden');
	entry.target.classList.add('section_slideUp');
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.25,
});

allSections.forEach(function (section) {
	sectionObserver.observe(section);

	// Add hidden class to all section dynamically for users that have javascript disabled.
	section.classList.add('section_hidden');
});

// // Lazy loading images
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
// 	const [entry] = entries;

// 	if (!entry.isIntersecting) {
// 		return;
// 	}

// 	// Replace the low resolution image with the data_src
// 	entry.target.src = entry.target.dataset.src;

// 	// Remove blur when the image finishes loading
// 	entry.target.addEventListener('load', function () {
// 		entry.target.classList.remove('lazy_img');
//         console.log(`Weghalen blur bij: ${entry.target}`);
// 	});

//     observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
// 	root: null,
// 	threshold: 0,
// });

// imgTargets.forEach(img => imgObserver.observe(img));
