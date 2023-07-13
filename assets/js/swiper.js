const slides = document.querySelectorAll("[data-slide]");
const buttons = document.querySelectorAll("[data-button]");
const descriptionElements = document.querySelectorAll(".description");

let currSlide = 0;
let maxSlide = slides.length - 1;

const updateCarousel = (number = 0) => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - number) * 100}%)`;
  });

  descriptionElements.forEach((description, index) => {
    if (index === number) {
      description.style.opacity = 1;
    } else {
      description.style.opacity = 0;
    }
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.button == "next" ? ++currSlide : --currSlide;

    if (currSlide > maxSlide) {
      currSlide = 0;
    } else if (currSlide < 0) {
      currSlide = maxSlide;
    }

    updateCarousel(currSlide);
  });
});

updateCarousel();
