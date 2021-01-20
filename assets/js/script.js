// Need a button that starts a timer and also changes the screen. Changing screen can be done by changing the CSS property to alter the visibility to hidden. 


// Each question can be four buttons that you can click that have if else statements to show incorrect or correct based on if the correct button is clicked. If correct button is clicked, I'll need to have that counted. 

// Selects element by class
// var timeEl = document.querySelector(".time");
var timeEl = document.getElementById("timer");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 5;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();
