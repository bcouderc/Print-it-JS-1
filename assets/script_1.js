const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


const prevArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const dots = document.querySelector('.dots');

let currentIndex = 0;

function updateSlide() {
	bannerImg.src = `/assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}

function majDots(index){
    dots.forEach((dot, index) => {
		dot.classList.toggle('dot_selected', index === currentIndex)
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	updateSlide();
  }
  
  function prevSlide() {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateSlide();
  }
  
  nextArrow.addEventListener('click', nextSlide);
  prevArrow.addEventListener('click', prevSlide);
  
  updateSlide();


