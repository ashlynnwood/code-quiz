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

// clicking a button
// starting a timer
// appending things to page

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
    answers: ["1. Arrays", "2. Functions", "3. Booleans", "4. Numbers"],
    a: "1. Arrays"
  },
  {
    q: "What does the strict equality operator compare?",
    answers: ["1. Type", "2. Value", "3. Both type and value", "4. None of the above"],
    a: "3. Both type and value"
  },
  {
    q: "What method should you use during development to make sure you are targeting what you want?",
    answers: ["1. function( )", "2. console.log( )", "3. debug( )", "4. array.length"],
    a: "2. console.log( )"
  },
  {
    q: "What is a for loop used for?",
    answers: ["1. Repeat functions", "2. Loop methods", "3. Log to the console", "4. Iterate over arrays"],
    a: "4. Iterate over arrays"
  },
  {
    q: "What is vanilla JavaScript?",
    answers: ["1. The opposite of chocolate JavaScript", "2. Pure JavaScript with no additional libraries", "3. jQuery + Bootstrap + Mongoose", "4. none of the above"],
    a: "2. Pure JavaScript with no additional libraries"
  }
];

// Loop over these questions- put question in question div
// Loop over answers
// Questions: 0, answers 

// start = (qIndex) => {
  function start(qIndex) {
  qDiv.innerHTML = "";
  // pass in question index 
  // loop over the questions[i].answers
  for (var i = 0; i < questions.length; i++) {
    var currentQ = questions[qIndex].q;
    var currentAs = questions[qIndex].answers;
    qDiv.textContent = currentQ;
    // qDiv.textContent = questions[i].answers
  }
   currentAs.forEach(function(newAs) {
      var answerList = document.createElement("button");
      answerList.textContent = newAs;
      qDiv.append(answerList);
      answerList.addEventListener("click", function () {
      start(qIndex);
      });
   })
  ;
  // Append these to the answers div
  // aDiv.textContent = 
  // loop over answers and append --NOT A FOR LOOP
  // use functions- every time you click button -> go to next question
  // -> bump index up -> show next question
  // keep track with count/index
};

// When you call start, pass in QIndex
startQuiz.addEventListener("click", function() {
start(qIndex);
}
);

// Clear highscores- empties the div
var clearScores = document.getElementById("#clear");
clearScores.addEventListener("click", function () {
  document.getElementById("#highscores").innerHTML = "";
}
);