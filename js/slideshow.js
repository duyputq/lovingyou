var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
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
  }, 5000000);
}

window.addEventListener('load', function() {
  timer = setInterval(function() {
    plusSlides(1);
  }, 5000000);
});