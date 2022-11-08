const slides = document.querySelectorAll(".slide");
const indicatorParents = document.querySelector(".slide-container ul");


slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`;
  });

let slideCounter = 0;

let maxSlide = slides.length - 1;

// nextSlide button
const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
    if (slideCounter === maxSlide) {
        slideCounter = 0;
      } else {
        slideCounter++;
      }

slides.forEach((slide, index) => {
    document.querySelector(".slide-container .selected").classList.remove('selected');
    indicatorParents.children[slideCounter].classList.add('selected');
    slide.style.transform = `translateX(${100 * (index - slideCounter)}%)`;
    });
});   

// Do the same thing for the previous button

const prevSlide = document.querySelector(".btn-prev");
// console.log(prevSlide)

prevSlide.addEventListener("click", function () {
    if (slideCounter === 0) {
        slideCounter = maxSlide;
      } else {
        slideCounter--;
      }

slides.forEach((slide, index) => {
    document.querySelector(".slide-container .selected").classList.remove('selected');
    indicatorParents.children[slideCounter].classList.add('selected');
    slide.style.transform = `translateX(${100 * (index - slideCounter)}%)`;
    });
});   



 