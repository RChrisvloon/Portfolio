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
const introImg = document.getElementById('intro_img');

const backToTop_btn = document.getElementById('backToTop_btn');

// 1. Sticky navigation eventlistener
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

const checkHeaderImage = function() {
    if(window.innerWidth < 858){
        introImg.src="images/chris_italy_wide.jpg";
    }
    else if(window.innerWidth == 858){
        introImg.src="images/chris_italy_wide.jpg";
    }
    else{
        introImg.src="images/chris_italy.jpg"; 
    }
}
// 
checkHeaderImage();

window.addEventListener('resize', function() {
    checkHeaderImage();
});

// 2. Scroll back to top button
const scrollToTop = function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

// 3. Reveal section animation
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

// 4. Slider Component
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider_btnLeft');
const btnRight = document.querySelector('.slider_btnRight');
const slideProgress_current = document.getElementById('progress_current');
const slideProgress_total = document.getElementById('progress_total');
const slidesWrapper = document.querySelector('.slides');

let currentSlide = 0;
const amountOfSlides = slides.length;

// Change value of totalAmount of slides in the slider component
slideProgress_total.textContent = amountOfSlides < 10 ? `0${amountOfSlides}` : amountOfSlides;

// Set the new translateX values to create the 'sliding'-effect
const goToSlide = function (slide) {
	slidesWrapper.style.transform = `translateX(${-100 * slide}%)`;

	// Change value of currentslide in slider component
	slideProgress_current.textContent = currentSlide < 9 ? `0${currentSlide + 1}` : currentSlide + 1;
};

// Button to go to next slide
const nextSlide = function () {
	if (currentSlide == amountOfSlides - 1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	}

	goToSlide(currentSlide);
};

const previousSlide = function () {
	if (currentSlide == 0) {
		currentSlide = maxSlide - 1;
	} else {
		currentSlide--;
	}

	goToSlide(currentSlide);
};

// Next/previous slidebutton eventlisteners
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', previousSlide);
