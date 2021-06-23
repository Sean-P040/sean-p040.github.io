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
document.onkeydown = slideShowCycle;
function slideShowCycle (e) {
  if (e.keyCode == '37' && document.location.href == 'http://127.0.0.1:8080/'
   || document.location.href == 'https://sean-p040.github.io/' 
   || document.location.href == 'https://sean-p040.github.io/index.html'
   || document.location.href == 'https://sean-p040.github.io/MyWork.html' 
   || document.location.href == 'https://sean-p040.github.io/index.html#footer'){
    //left arrow -> prev slide
    plusSlides(-1)
  }
  else if (e.keyCode == '39' && document.location.href == 'http://127.0.0.1:8080/'
    || document.location.href == 'https://sean-p040.github.io/' 
    || document.location.href == 'https://sean-p040.github.io/index.html'
    || document.location.href == 'https://sean-p040.github.io/MyWork.html' 
    || document.location.href == 'https://sean-p040.github.io/index.html#footer'){
    //right arrow -> next slide
    plusSlides(0)
   
  }
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
try{
if(show.classList == null){
//do nothing if null
} else {
show.textContent = greet;
}
} catch (e) {
  console.log(e, "Greeting")
}

try {
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
  setTimeout(showSlidesAuto, 10000); // Change image every 10 seconds
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
}  catch (error) {
  console.log(error, "Slideshow");
}