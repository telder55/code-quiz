// Selects element by class
// var timeEl = document.querySelector(".time");
var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var correctAnswer = document.querySelector(".correct");
var incorrectAnswer = document.querySelector(".incorrect");
var secondsLeft = 60;


// Remove Quiz Start
function removeStart() {
  var quizStart = document.getElementById("quiz-start");
  quizStart.classList.remove("active");
}

// Remove Question 1 Correct
function removeQ1correct() {
  q1.classList.remove("active");
  addQ2 ();
}

// Add Question 1
function addQ1() {
  var q1 = document.getElementById("q1");
  q1.classList.add("active");
}

// Add Question 2
function addQ2() {
  var q2 = document.getElementById("q2");
  q2.classList.add("active");
}

function setTime() {
  // Calling removeStart function
    removeStart ();
    addQ1 ();
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
startButton.addEventListener("click", setTime);
correctAnswer.addEventListener("click", removeQ1correct );
incorrectAnswer.addEventListener("click", removeQ1wrong );



