// Timer Variables
var timeEl = document.getElementById("timer");
var secondsLeft = 60;

// Start Button Variable
var startButton = document.getElementById("start-button");

// variable for answers
var correctAnswer = document.querySelectorAll(".correct")
var incorrectAnswer = document.querySelectorAll(".incorrect")

// Listen to click for answers that have class of Incorrect
incorrectAnswer.forEach(element => {
    element.addEventListener("click", changeQIncorrect); 
});

// Listen to click for answers that have class of Correct
correctAnswer.forEach(element => {
    element.addEventListener("click", changeQCorrect); 
});

// Change Question when Incorrect
function changeQIncorrect() {
    changeQ();
    console.log("This is working incorrect");
  }

// Change Question when Correct
function changeQCorrect() {
    changeQ();
    console.log("This is working correct");
  }

// Changes to next question 
function changeQ() {
    var nextQ2 = document.querySelector(".active").nextElementSibling;
    nextQ2.classList.add("active");
    var removePrevious = document.querySelector(".active");
    removePrevious.classList.remove("active");
  }

function setTime() {
  // Calls changeQ function
    changeQ();
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

// Runs setTime function on Start Button Click
startButton.addEventListener("click", setTime);
