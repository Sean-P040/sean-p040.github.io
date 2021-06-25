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
   || document.location.href == 'https://sean-p040.github.io/' && e.keyCode == '37'
   || document.location.href == 'https://sean-p040.github.io/index.html' && e.keyCode == '37'
   || document.location.href == 'https://sean-p040.github.io/MyWork.html'  && e.keyCode == '37'
   || document.location.href == 'https://sean-p040.github.io/index.html#footer' && e.keyCode == '37'
   || document.location.href == 'https://sean-p040.github.io/index.html#top' && e.keyCode == '37'){
    //left arrow key -> prev slide
    plusSlides(-1)
  }
  else if (e.keyCode == '39' && document.location.href == 'http://127.0.0.1:8080/'
    || document.location.href == 'https://sean-p040.github.io/' && e.keyCode == '39'
    || document.location.href == 'https://sean-p040.github.io/index.html' && e.keyCode == '39'
    || document.location.href == 'https://sean-p040.github.io/MyWork.html' && e.keyCode == '39'
    || document.location.href == 'https://sean-p040.github.io/index.html#footer' && e.keyCode == '39'
    || document.location.href == 'https://sean-p040.github.io/index.html#top' && e.keyCode == '37'){ 
    //right arrow key -> next slide
    plusSlides(1)
   
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

//show or hide 'to top' button

window.onscroll = function()
{
  var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if(pageOffset > 0)
    {
        document.getElementById('upArrow').style.visibility="visible";
    }else if (pageOffset <= 0)
    {
        document.getElementById('upArrow').style.visibility="hidden";
    }
};

function calculateBMI(){
 const formValues = document.querySelectorAll('#bmi-calculator input')
 const valuesArray = [];

 for (let i=0;i<formValues.length;i++){

   valuesArray.push(formValues[i].value)
 }

 if(valuesArray[0] == ""|| valuesArray[1] == ""){
   alert("Please fill out all fields to calculate your BMI")
 } else if (valuesArray[0] <= 100 && valuesArray[0] > 0 &&  valuesArray[1] <= 400 && valuesArray[1] > 0) {

  const result = document.getElementById("bmi-result")
  result.innerHTML = "Your BMI is: " + ((parseFloat(valuesArray[1]) / parseFloat(valuesArray[0])) /  parseFloat(valuesArray[0]) * 703).toFixed(2)
  const calculatedBMI = ((parseFloat(valuesArray[1]) / parseFloat(valuesArray[0])) /  parseFloat(valuesArray[0]) * 703).toFixed(2)
  const bmiFooterText = document.getElementById('form-footer')
  bmiFooterText.innerHTML = BmiRange(calculatedBMI);

 } else {
   alert("Please enter valid, non-negative, numbers for your height and weight. \n\nHeight must be less than 100 inches and Weight must be less than 400 pounds.")
 }
} 

function BmiRange(calculatedBMI) {
       
  if (calculatedBMI < 18.5){
    document.getElementById("form-footer").style.color = "red";
   

    return "Your BMI falls within the underweight range"
  } else if (calculatedBMI >= 18.5 && calculatedBMI < 25){
    document.getElementById("form-footer").style.color = "green";

    return "Your BMI falls within the healthy weight range"
  }
  else if (calculatedBMI >= 25 && calculatedBMI < 30){
    document.getElementById("form-footer").style.color = "orange";
 
    return "Your BMI falls within the overweight range"
  }
  else if (calculatedBMI > 30){
    document.getElementById("form-footer").style.color = "red";
    return "Your BMI falls within the obesity range"
  }
}