//*********Intro to Events*********

//Select button and h1 Text and declare to variables
var clickMeBtn = document.querySelector("#firstBtn");
var h1Text = document.querySelector("h1");
var lis =document.querySelectorAll("li");
var changeBack =document.querySelectorAll("button")[1];

//add click event listener to buttons and h1 text
clickMeBtn.addEventListener("click", runOnBtnClick);
h1Text.addEventListener("click", runOnTxtClick)
changeBack.addEventListener("click", changeBackground)

//add click event listener to all lis'
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", runOnLiClick);  
}

//function that runs when button is clicked
function runOnBtnClick() {
  h1Text.textContent = "Someone Just Clicked me!";
  console.log("Someone Just Clicked me!");
  //Interval function runs for 3s before highlighting text
  setInterval(function() {
    clickMeBtn.classList.add("clickedText");
  }, 3000) 
}

//function that runs when h1Text is clicked
function runOnTxtClick() {
  alert("Someone Clicked the h1 text");
  //toggles between clickedText CSS Class and normal text
  h1Text.classList.toggle("clickedText");
}

//function that runs when Lis are clicked
function runOnLiClick() {
  //'this' key refers to whatever is being passed on
  this.classList.toggle("clickedLis");
}

//function that runs when change back btn is clicked
function changeBackground() {
  //dcument.body selects body. 
  //You could also have selected body using querySelector
  document.body.classList.toggle("changeBack");
}


