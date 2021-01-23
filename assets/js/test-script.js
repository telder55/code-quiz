// Selects element by class
// var timeEl = document.querySelector(".time");
var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var correctAnswer = document.querySelector(".correct");

// variable for question 2 correct answer
var correct2 = document.querySelector("#correct2");
// variable for question 2 correct answer
var correct3 = document.querySelector("#correct3");
// variable for question 2 correct answer
var correct4 = document.querySelector("#correct4");


var incorrectAnswer = document.querySelector(".incorrect");
var secondsLeft = 60;

// Change to Question 1
function changeQ() {
    var nextQ = document.getElementById("quiz-start").nextElementSibling;
    nextQ.classList.add("active");
    
  }
// Change Question all others
function changeQ2() {
    var nextQ2 = document.querySelector(".active").nextElementSibling;
    nextQ2.classList.add("active");
    var removePrevious = document.querySelector(".active");
    removePrevious.classList.remove("active");
  }

// Remove Quiz Start
function removeStart() {
  var quizStart = document.getElementById("quiz-start");
  quizStart.classList.remove("active");
}


// Add Question 1
// function changeQ() {
//   var nextQ = document.getElementById("quiz-screen").nextElementSibling;
//   nextQ.classList.add("active");
//   console.log(nextQ);
// }

// Add Question 2
function addQ2() {
  var q2 = document.getElementById("q2");
  q2.classList.add("active");
}

function setTime() {
  // Calling removeStart function
    removeStart ();
    changeQ ();
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


// Add event listener to generate button
// startButton.addEventListener("click", removeStart);
// window.onload = changeQ;
startButton.addEventListener("click", setTime);
correctAnswer.addEventListener("click", changeQ2);
correct2.addEventListener("click", changeQ2);
correct3.addEventListener("click", changeQ2);
correct4.addEventListener("click", changeQ2);
// incorrectAnswer.addEventListener("click", removeQ1incorrect);