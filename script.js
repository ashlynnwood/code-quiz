// initial click handler- start ()
// listening to click on start button

// when click start button: timer starts, empty quiz challenge div
// set inner html of div to string so it will go away on click start
// innerhtml or text content to empty string often

// then use another function to show osmething on the page (first question)

// start running several functions
// 1. timer
// 2. updating the oage (next question)
// 3. getting answer (when click one, run another function)
// separation of concerns- break down
// 3. click answer- get value off button -> data attributes

// Clear highscores- empties the div

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

var questions = [
  {
    q: "Question?",
    answers: ["one", "two", "three", "four"],
    a: "one"
  }
]

// Loop over these questions- put question in question div
// Loop over answers
// Questions: 0, answers 

start = (i) => {
  // pass in question index 
  qDiv.textContent = questions[i].a
  // loop over the questions[i].answers
  // Append these to the answers div
  // aDiv.textContent = 
  // loop over answers and append --NOT A FOR LOOP
  // use functions- every time you click button -> go to next question
  // -> bump index up -> show next question
  // keep track with count/index
};

// When you call start, pass in QIndex
start(QIndex)