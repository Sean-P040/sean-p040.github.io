function darkMode() {
    "use strict";
    var element = document.body;
    var element2 = document.getElementById("headerText");
    var element3 = document.getElementById("navBar");
    element.classList.toggle("dark-mode");
    element2.classList.toggle("dark-mode");
    element3.classList.toggle("dark-mode");

}

var today = new Date();
var time = today.getHours();
var greet;

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
show.textContent = greet;