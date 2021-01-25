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

    // 
    function getInitials(event) {
        event.preventDefault();
        var initialsText = document.getElementById("initials").value;
        var newScore = secondsLeft;
        storeHighscores(initialsText, newScore);
    };

    
  

    // getInitials function

    // function getInitials(event) {
    //     event.preventDefault();
    //     var initialsText = document.getElementById("initials").textContent;
    //     return initialsText;
    // };

    

// TO DO 

// Subtract 5 seconds from the timer when an incorrect answer is selected.  CHECK

// Append a message underneath the question to say whether correct or incorrect. Use set time out to then call the next function and switch to the next screen.

// Keep track of scores and fill into the high scores list.

// Link High Scores link to the high scores page CHECK

// Add correct answers to an array and get index to display as high score

lastQ1.addEventListener("click", finalScore);
lastQ2.addEventListener("click", finalScore);
lastQ3.addEventListener("click", finalScore);
lastQ4.addEventListener("click", finalScore);

var yourScore;

function finalScore(){
    yourScore = secondsLeft;
    clearInterval(timerInterval);
    var form = document.getElementById("highscore-form");
    // make form show up
    form.setAttribute("style", "display: inline");
    document.body.appendChild(form)
    console.log(yourScore);

};

// High Scores Empty Array
var highScoresArray = [];
console.log(highScoresArray);

// High Scores Get Item

if (localStorage.getItem("High Scores")) {
    highScoresArray = JSON.parse(localStorage.getItem("High Scores"));
};

console.log(highScoresArray);


function storeHighscores(initials, score){
    var getScore = {
        Initials: initials,
        Score: score
        
    };
    console.log(highScoresArray);
    highScoresArray.push(getScore);
    // Stringify Highscores Array
    localStorage.setItem("High Scores", JSON.stringify(highScoresArray));
    console.log(getScore);
};
    // get the values from high score and initials

    // put them into the array with .push the final time and the intiails submitted in a form of an object. when hit enter push object into array, push initials and {intiails: variable, score: variable}
    // can update this array to update high scores page
    // after push into an array then 
    // use document ready and if statement to look into local storage 

    // event listener on form submit - preventdefault - store in intials vartiable
