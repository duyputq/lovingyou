/*
var slideIndex = 1;
var slides = document.getElementsByClassName("slide__letter-contain");
var timer;

showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  timer = setInterval(function() { 
    plusSlides(1);
  }, 3000);
}

window.addEventListener('load', function() {
  timer = setInterval(function() {
    plusSlides(1);
  }, 3000);
});
*/