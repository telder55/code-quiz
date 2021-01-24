// Start Button Variable
var startButton = document.getElementById("start-button");

// High Scores Variable 
var highScores = document.getElementById("scores-link");
var highScoresDiv = document.getElementById("high-scores");

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

    // Subtract 5 Seconds
    secondsLeft -= 5;

  }

// Change Question when Correct
function changeQCorrect() {
    changeQ();
  }

// Changes to next question 
function changeQ() {
    var nextQ = document.querySelector(".active").nextElementSibling;
    nextQ.classList.add("active");
    var removePrevious = document.querySelector(".active");
    removePrevious.classList.remove("active");
  }

// High Scores link
highScores.addEventListener("click", scoreScreen);

//Remove all active class
function scoreScreen() {
    console.log("hey there bud");
    highScoresDiv.classList.add("active");
    var removeAllActive = document.querySelector(".active")
    removeAllActive.classList.remove("active");
}

// Timer Variables
var timeEl = document.getElementById("timer");
var secondsLeft = 60;

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