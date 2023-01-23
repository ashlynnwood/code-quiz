// Pseudocode: 
// set inner html of div to string so it will go away on click start
// innerhtml or text content to empty string often
// then use another function to show something on the page (first question)

// start running several functions
// 1. timer
// 2. updating the page (next question)
// 3. getting answer (when click one, run another function)
// separation of concerns- break down
// 3. click answer- get value off button -> data attributes

// clicking a button
// starting a timer
// appending things to page


// Global Variables
var startQuiz = document.querySelector("#start-btn");
var answerBtn = document.createElement("div");
var startD = document.querySelector("#startDiv");
var correctM = document.querySelector(".correct");
var quizQ = document.querySelector("#quiz-q");

// startQuiz.addEventListener("click", function() {
//   // When click button, empty quiz challenge div
//   document.getElementById("qDiv").innerHTML = "";
//   }
// );

// when click start button: timer starts
var timeEl = document.querySelector(".time");
var countDown = 76;
var penalty = 10;

function setTime() {
  var timerCount = setInterval(function() {
    countDown--;
    timeEl.textContent = "Time: " + countDown;

    if(countDown === 0) {
      clearInterval(timerCount);
      timeEl.textContent = "Time's up!";
      qDiv.innerHTML = "";
      endQuiz();
    }
  }, 1000);
}

startQuiz.addEventListener("click", function() {
  setTime();
}
);


// Questions = OBJECTS
// var questions = array of objects

// Each question object has:
// 1. the question itself (object-first thing in array)
// 2. possible ANSWERS (array)
// 3. correct answer

var qIndex = 0;
var userScore = 0;

var questions = [
  {
    q: "The concat method combines which items?",
    answers: ["Arrays", "Functions", "Booleans", "Numbers"],
    a: "Arrays"
  },
  {
    q: "What does the strict equality operator compare?",
    answers: ["Type", "Value", "Both type and value", "None of the above"],
    a: "Both type and value"
  },
  {
    q: "What method should you use during development to make sure you are targeting what you want?",
    answers: ["function( )", "console.log( )", "debug( )", "array.length"],
    a: "console.log( )"
  },
  {
    q: "What is a for loop used for?",
    answers: ["Repeat functions", "Loop methods", "Log to the console", "Iterate over arrays"],
    a: "Iterate over arrays"
  },
  {
    q: "What is vanilla JavaScript?",
    answers: ["The opposite of chocolate JavaScript", "Pure JavaScript with no additional libraries", "jQuery + Bootstrap + Mongoose", "none of the above"],
    a: "Pure JavaScript with no additional libraries"
  }
];

// Loop over these questions- put question in question div
// Loop over answers
// Questions: 0, answers 

// start = (qIndex) => {
  function start(qIndex) {
  startD.style.display = "none";
  answerBtn.innerHTML = "";
  // pass in question index 
  // loop over the questions[i].answers
  // for (var i = 0; i < questions.length; i++) {

    quizQ.textContent = questions[qIndex].q;
    var currentAs = questions[qIndex].answers;
    
    // qDiv.textContent = questions[i].answers
  // }
   // Append these to the answers div
  // aDiv.textContent = 
  // loop over answers and append --NOT A FOR LOOP
  qDiv.append(answerBtn);
   currentAs.forEach(function(newAs) {
      var answerList = document.createElement("button");
      answerList.textContent = newAs;
      answerBtn.append(answerList);
      answerList.addEventListener("click", function () {
      start(qIndex);
      });
   })
  ; 
  
  // use functions- every time you click button -> go to next question
  // -> bump index up -> show next question
  // keep track with count/index
};
 
answerBtn.addEventListener("click", function(event){
 console.log(event.target.innerHTML);
//  Checking if user answer is correct
if (event.target.innerHTML === questions[qIndex].a) {
  // Show correct message
  correctM.innerHTML = "Correct!"
  // Go to next question
  qIndex++;
start(qIndex);
setTimeout(function() {
  correctM.innerHTML = "";
}, 1000);
 
 
} else { 
  correctM.innerHTML = "Wrong, try again!"
  // Subtract 10 seconds from timer if wrong answer
  // Make sure countdown is greater than penalty so it doesn't give negative values
  if (countDown > penalty) {
  countDown -= penalty;
    }
  setTimeout(function() {
    correctM.innerHTML = "";
}, 1000);
}

})

function endQuiz() {
if (countDown = 0 || questions.length === 0) {
  countDown = 0;
  qDiv.innerHTML = "";
}
  let title = document.createElement("h1");
    title.textContent = "Game over!"
  let score = document.createElement ('p');
    score.textContent = `You scored ${countDown} points. Good job!`
  let initials = createElement('p');
    initials.textContent = "Please enter your initials:"
  let initialInput = document.createElement("input");
  let highBtn = document.createElement("button");
    highBtn.innerHTML = "Go to Highscores";

  qDiv.append(title);
};


// When you call start, pass in QIndex
startQuiz.addEventListener("click", function() {
start(qIndex);
}
);


// Highscore label form input
// var createForm = document.createElement
// // Clear highscores- empties the div
// var clearScores = document.getElementById("#clear");
// clearScores.addEventListener("click", function () {
//   document.getElementById("#highscores").innerHTML = "";
// }
// );