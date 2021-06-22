function darkMode() {
    "use strict";
    var element = document.body;
    var element2 = document.getElementById("headerText");
    var element3 = document.getElementById("navBar");
    var element4 = document.getElementById("landingText");
    var animationElement = document.getElementById("animation")
    var animationElement2 = document.getElementById("animation2")
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    element3.classList.toggle("dark-mode");
    animationElement.classList.toggle("dark-mode");
    animationElement2.classList.toggle("dark-mode");
    element4.classList.toggle("dark-mode");


}


var today = new Date();
var time = today.getHours();
var greet = "Greetings,'";

if (time > 16) {
  greet = 'Good evening,';
} else if (time > 12) {
  greet = 'Good afternoon,';
} else if (time >= 0) {
  greet = 'Good morning,';
} else {
  greet = 'Greetings,';
}

var show = document.getElementById('greetMessage');

if(show.classList = ""){
//do nothing if null
} else {
show.textContent = greet;
}

var slideIndex = 0;
showSlidesAuto();

function showSlidesAuto() {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlidesAuto, 7500); // Change image every 7.5 seconds
  plusSlides(0)
}

//var slideIndex = 1;
showSlides(slideIndex); 

// Next/previous controls
function plusSlides(n) {
 showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}