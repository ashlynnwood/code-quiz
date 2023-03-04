// Global Variables
const startQuiz = document.querySelector("#start-btn");
const answerBtn = document.createElement("div");
const startD = document.querySelector("#startDiv");
const correctM = document.querySelector(".correct");
const quizQ = document.querySelector("#quiz-q");
let highScore1 = JSON.parse(localStorage.getItem("highscores"))||[];



// when click start button: timer starts
const timeEl = document.querySelector(".time");
let countDown = 70;
let penalty = 10;

function setTime() {
  let timerCount = setInterval(function() {
    countDown--;
    timeEl.textContent = "Time: " + countDown;

    if(countDown === 0 || qIndex === questions.length) {
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

  function start(qIndex) {
  startD.style.display = "none";
  answerBtn.innerHTML = "";

    quizQ.textContent = questions[qIndex].q;
    let currentAs = questions[qIndex].answers;
    if (qIndex === questions.length) {
      endQuiz();
    }
    
  qDiv.append(answerBtn);
   currentAs.forEach(function(newAs) {
      var answerList = document.createElement("button");
      answerList.textContent = newAs;
      answerBtn.append(answerList);
      answerList.addEventListener("click", function () {
      start(qIndex);
      });
   });
};
 
answerBtn.addEventListener("click", function(event){
 console.log(event.target.innerHTML);
    //  Checking if user answer is correct
    if (event.target.innerHTML === questions[qIndex].a) {
        // Show correct message
        correctM.innerHTML = "Correct!"
        // Go to next question
        qIndex++;
        if (qIndex === questions.length) {
          endQuiz();
        }
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
      if (qIndex === questions.length) {
        endQuiz();
      }
    }
});

// Function to end quiz and display highscore input content when timer hits 0 or run out of questions
function endQuiz() {
  if (countDown === 0 || qIndex === questions.length) {
    // countDown = 0;
    let userScore = countDown;
    qDiv.innerHTML = "";
  };
  let title = document.createElement("h1");
    title.textContent = "Game over!"
  let score = document.createElement ('p');
    score.textContent = `You scored ${countDown} points.`
  let initials = document.createElement('p');
    initials.textContent = "Please enter your initials:"
  let initialInput = document.createElement("input");
  let highBtn = document.createElement("button");
    highBtn.innerHTML = "Go to Highscores";
    highBtn.addEventListener("click", function(){
      let scoreData = {initials: initialInput.value, scoreD: countDown }
      highScore1.push(scoreData)
      localStorage.setItem("highscores", JSON.stringify(highScore1));
      window.location.href = "highscores.html";
    });
  qDiv.append(title, score, initials, initialInput, highBtn);
};

// When you call start, pass in QIndex
startQuiz.addEventListener("click", function() {
  start(qIndex);
});
 