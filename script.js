// initial click handler- start ()
// listening to click on start button
var startQuiz = document.querySelector("#start-btn");
startQuiz.addEventListener("click", function() {
  // When click button, empty quiz challenge div
  document.getElementById("qDiv").innerHTML = "";
  }
);

// when click start button: timer starts
var timeEl = document.querySelector(".time");
var timerEl = document.getElementById("#timer");
var countDown = 76;

function setTime() {
  var timerCount = setInterval(function() {
    countDown--;
    timeEl.textContent = "Time: " + countDown;

    if(countDown === 0) {
      clearInterval(timerCount);
      timeEl.textContent = "Time's up!";
    }
  }, 1000);
}

startQuiz.addEventListener("click", function() {
  setTime();
}
);

// set inner html of div to string so it will go away on click start
// innerhtml or text content to empty string often
// then use another function to show something on the page (first question)

// start running several functions
// 1. timer
// 2. updating the page (next question)
// 3. getting answer (when click one, run another function)
// separation of concerns- break down
// 3. click answer- get value off button -> data attributes

// Clear highscores- empties the div
var clearScores = document.getElementById("#clear");
clearScores.addEventListener("click", function () {
  document.getElementById("#highscores").innerHTML = "";
}
);

// clicking a button
// starting a timer
// appending things to page

// Questions = OBJECTS
// var questions = array of objects

// Each question object has:
// 1. the question itself (object-first thing in array)
// 2. possible ANSWERS (array)
// 3. correct answer

var QIndex = 0;
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
    answers: ["function()", "console.log()", "debug()", "array.length"],
    a: "console.log()"
  },
  {
    q: "What is a for loop used for?",
    answers: ["Repeat functions", "Loop methods", "Log to the console", "Iterate over arrays"],
    a: "Iterate over arrays"
  },
  {
    q: "How do you create a function in JavaScript?",
    answers: ["function functionName()", "function: functionName", "function = functionName", "none of the above"],
    a: "function functionName()"
  },
];

// Loop over these questions- put question in question div
// Loop over answers
// Questions: 0, answers 

start = (i) => {
  // pass in question index 
  qDiv.textContent = questions[i].a
  // loop over the questions[i].answers
  for (var i = 0; i < questions.length; i++)
  // Append these to the answers div
  // aDiv.textContent = 
  // loop over answers and append --NOT A FOR LOOP
  // use functions- every time you click button -> go to next question
  // -> bump index up -> show next question
  // keep track with count/index
};

// When you call start, pass in QIndex
start(QIndex)