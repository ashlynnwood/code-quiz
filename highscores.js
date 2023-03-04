//  Highscore label form input
let scoreList = document.getElementById("highscores");
let savedInitial = JSON.parse(localStorage.getItem("highscores"));
    for (let i = 0; i < savedInitial.length; i++) {
      let scoreItem = document.createElement("li");
      scoreItem.textContent = `${savedInitial[i].initials}: ${savedInitial[i].scoreD}`;
      scoreList.append(scoreItem);
    };

// Clear highscores- empties the div
let clearScores = document.getElementById("clear");
clearScores.addEventListener("click", function () {
  document.getElementById("highscores").innerHTML = "";
});