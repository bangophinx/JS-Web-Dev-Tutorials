var pScoreText = document.querySelectorAll("div");
var pBtn = document.querySelectorAll("button");
var resetBtn = document.querySelector("#reset");
var final1 = 0;

var playToScore = document.querySelector("#playTo");


for (let i = 0; i < pBtn.length; i++) {
  pBtn[i].addEventListener("click", p1ScoreChange);
}


function p1ScoreChange() {
  console.log(this);
  if (Number(final1) < Number(playToScore.textContent)) {
    pScoreText[i].textContent = Number(pScoreText[i].textContent) + 1;
    final1 = Number(pScoreText[i].textContent);
    console.log("P1Score = " + pScoreText[i].textContent + " Final p1 score = " + final1);
  }
  else {
    pScoreText[i].classList.add("reachedGoal");
  }
}


// function p1ScoreChange() {
//   if (Number(final1) < Number(playToScore.textContent) && Number(final2) < Number(playToScore.textContent)) {
//     p1ScoreText.textContent = Number(p1ScoreText.textContent) + 1;
//     final1 = Number(p1ScoreText.textContent);
//     console.log("P1Score = " + p1ScoreText.textContent + " Final p1 score = " + final1);
//   }
//   else{
//     p1ScoreText.classList.add("reachedGoal");
//   }
// }

// function p2ScoreChange() {
//   if (Number(final1) < Number(playToScore.textContent) && Number(final2) < Number(playToScore.textContent)) {
//     p2ScoreText.textContent = Number(p2ScoreText.textContent) + 1;
//     final2 = Number(p2ScoreText.textContent);
//     console.log("P2Score = " + p2ScoreText.textContent + " Final p2 score = " + final2);
//   }
//   else{
//     p2ScoreText.classList.add("reachedGoal");
//   }
// }







