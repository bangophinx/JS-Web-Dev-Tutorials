//*****Scorekeeper App***** */

//Declare variables and select elements to be manipulated
var pScoreText = document.querySelectorAll("div");
var pBtn = document.querySelectorAll("button");
var playToScore = document.querySelector("#playTo");
var playToChange = document.querySelector("#playToChange");
//variable to keep count of player scores
var pScore = [0, 0];

//Listening to changes of winning score
playToChange.addEventListener("change", playToScoreChange);

//Listening to player button bein clicked
for (let i = 0; i < pBtn.length; i++) {
  pBtn[i].addEventListener("click", pScoreChange);
}

//function running score keeping and updating score
function pScoreChange() {
  //uses text 'value' of player buttones to identify
  //score to change
  var playerNo = Number(this.textContent.slice(7, 8));
  var i = playerNo - 1;

  //if player scores are less than winning score  
  if (Number(pScore[0]) < Number(playToScore.textContent) && Number(pScore[1]) < Number(playToScore.textContent)) {
    //toggle coolour of clicked player button
    this.classList.toggle("clicked");
    //add score by 1 for the clicked player, display and log
    pScore[i] ++;
    pScoreText[i].textContent = pScore[i];
    console.log("P" + playerNo + " Score = " + pScore[i]);
  }

  //if player scores get to wining score highlight winner
  else {
    pScoreText[i].classList.add("reachedGoal");
  }
}

//function to change winning score
function playToScoreChange() {
  playToScore.textContent = this.value;
  console.log(this.value);
}
