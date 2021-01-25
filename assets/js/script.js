// Start Button Variable
var startButton = document.getElementById("start-button");

// Last Question Button Varaibles
var lastQ1 = document.getElementById("last-q-1");
var lastQ2 = document.getElementById("last-q-2");
var lastQ3 = document.getElementById("last-q-3");
var lastQ4 = document.getElementById("last-q-4");

// Submit Button Variables

var submitButton = document.getElementById("submit-button");

// High Scores Variable 
var highScores = document.getElementById("scores-link");
var highScoresDiv = document.getElementById("high-scores");

// variable for answers
var correctAnswer = document.querySelectorAll(".correct")

var button1 = document.querySelectorAll(".answer1")
button1.forEach(element => {
    element.addEventListener("click", testFunction); 
});

function testFunction (){
    console.log("button1 works");
};

var incorrectAnswer = document.querySelectorAll(".incorrect")

// Message Area
var messageArea = document.getElementById("message-area")

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
    messageArea.textContent = "Oh No!!";

    // Subtract 5 Seconds
    secondsLeft -= 5;

  }

// Change Question when Correct
function changeQCorrect() {
    changeQ();
    messageArea.textContent = "Nice!";
  }

// Changes to next question 
function changeQ() {
    var nextQ = document.querySelector(".active").nextElementSibling;
    nextQ.classList.add("active");
    var removePrevious = document.querySelector(".active");
    removePrevious.classList.remove("active");
  }

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
var timerInterval;

function setTime() {
  // Calls changeQ function
    changeQ();
  // Sets interval in variable
    timerInterval  = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      secondsLeft = 0;
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}

//Event Listeners: 
    // Runs setTime function on Start Button Click
    startButton.addEventListener("click", setTime);

    // High Scores link
    highScores.addEventListener("click", scoreScreen);

    // Submit Button 
    submitButton.addEventListener("click", getInitials);

    // Last Question Buttons 
    lastQ1.addEventListener("click", finalScore);
    lastQ2.addEventListener("click", finalScore);
    lastQ3.addEventListener("click", finalScore);
    lastQ4.addEventListener("click", finalScore);

    // Get Form Initials and call store high scores function adding arguments to it. 
    function getInitials(event) {
        event.preventDefault();
        var initialsText = document.getElementById("initials").value;
        var newScore = secondsLeft;
        storeHighscores(initialsText, newScore);
        changeQ();
    };

var yourScore;

function finalScore(){
    yourScore = secondsLeft;
    clearInterval(timerInterval);
    var form = document.getElementById("highscore-form");
    console.log(yourScore);
};

// High Scores Array
var highScoresArray = [];

// High Scores Get Item
if (localStorage.getItem("High Scores")) {
    highScoresArray = JSON.parse(localStorage.getItem("High Scores"));
};

// Store Score to Local Storage and push to High Scores Array
function storeHighscores(initials, score){
    var getScore = {
        Initials: initials,
        Score: score
    };
    console.log(highScoresArray);
    highScoresArray.push(getScore);
    // Stringify Highscores Array
    localStorage.setItem("High Scores", JSON.stringify(highScoresArray));

    var highScoresList = document.getElementById("high-scores-list");


    // Sort Array 

    function compare( a, b ) {
      if ( a.Score > b.Score ){
        return -1;
      }
      if ( a.Score < b.Score ){
        return 1;
      }
      return 0;
    }
    
    highScoresArray.sort( compare );

    // Loop through Array and Add Scores to List
    for (var i = 0; i < highScoresArray.length; i++) {
      var listItem = document.createElement("li");
      listItem.innerText = highScoresArray[i].Initials + " " + highScoresArray[i].Score;
      highScoresList.appendChild(listItem);


      // set text to what i need to pull out from the high scores array inner text
      //append the list item to high scores list append child
      
    }

    console.log(getScore);
};


    // get the values from high score and initials

    // can update this array to update high scores page
    // after push into an array then 
    // use document ready and if statement to look into local storage 

    // event listener on form submit - preventdefault - store in intials vartiable
