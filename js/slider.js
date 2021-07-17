const slider = document.querySelector('.slider');
const sliderElements = slider.querySelectorAll('.slider-element');
const sliderDots = slider.querySelectorAll('.slider-dot');
const sliderNextButton = slider.querySelector('.slider-arrow-next');
const sliderPrevButton = slider.querySelector('.slider-arrow-back');

let currentSlideIndex = 0;

const makeElementActive = function(i) {
  for (let j = 0; j < sliderElements.length; j++) {
    sliderElements[j].classList.remove('slider-element-active');
  }

  sliderElements[i].classList.add('slider-element-active');
  currentSlideIndex = i;

  for (let j = 0; j < sliderDots.length; j++) {
    sliderDots[j].classList.remove('slider-dot-active');
  }

  sliderDots[i].classList.add('slider-dot-active');
}

const addDotClickHandler = function(i) {
  sliderDots[i].addEventListener('click', () => makeElementActive(i));
}

for (let i = 0; i < sliderDots.length; i++) {
  addDotClickHandler(i);
}

sliderNextButton.addEventListener('click', function() {
  const slideCount = sliderElements.length;
  let nextSlideIndex = (currentSlideIndex + 1) % slideCount;

  makeElementActive(nextSlideIndex);
});

sliderPrevButton.addEventListener('click', function() {
  const slideCount = sliderElements.length;
  let prevSlideIndex = (slideCount + currentSlideIndex - 1) % slideCount;

  makeElementActive(prevSlideIndex);
});
