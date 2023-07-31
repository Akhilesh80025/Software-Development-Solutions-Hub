const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

const intersectionOptions = {
  threshold: 0.5
};

const slideObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentSlide = Array.from(slides).indexOf(entry.target);
      showSlide(currentSlide);
    }
  });
}, intersectionOptions);

slides.forEach(slide => {
  slideObserver.observe(slide);
});

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === slideIndex);
  });
}
