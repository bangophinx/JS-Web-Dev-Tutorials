
var p = [1, 1, 1, 1, 1];
var q = ["a", "b", "c", "d"];
var r = ["a", 1, 1, "a", "a"];
var s = [1, 6, 19, 1, -91];

// //**************************** */
// Find Max element in an array
// //*************************** */


//Print element with highest value
//Add function below to run.
// console.log(maxArray(s));

function maxArray(x) {
  var max=x[0];
  for (var i = 1; i < x.length; i++) {
    if(x[i]>max){
      max=x[i];
    }
  }
  return max;
}

//**************************************************** */



// //**************************** */
// Sum all elements of Array
// //*************************** */


//Sums all elements contained in an array using For loop
//Add function below to run.
// sumArray(s);

function sumArray(x) {
  var result=0;
  for (var i = 0; i < x.length; i++) {
    result = result+x[i];
  }
  console.log(result);
}


//Sums all elements contained in an array using For loop
//Add function below to run.

// var sum = 0;
// s.forEach(sumAll)

// function sumAll(element){
//   sum+=element;
// }
// console.log(sum);


//**************************************************** */


// //**************************** */
// Check if Array is Uniform
// //*************************** */

//Function checks to see if all elements are uniform. 
//Add function below to run.

// console.log(isUniform(r));

function isUniform(x) {
  for (var i = 1; i < x.length; i++) {
    if (x[i] !== x[0]) {
      return false;
    }
  }
  return true;
}

// //********************************************** */


// //**************************** */
//Print Reverse Array
// //*************************** */

//Print Reverse Array long Way. Add Functions below to run
// reverseArray(p);


function reverseArray(x) {
  var j = x.length - 1;
  var result = [];
  for (var i = 0; i < x.length; i++) {
    result[i] = x[j];
    j--;
  }
  console.log(result);
}

// Print Reverse Array Short Way. Add Functions below to run
// reverseEasy(q);
function reverseEasy(input) {
  var reversedResult = input.reverse();
  console.log(reversedResult);
}



//**************************************************** */
//Colour Selection Array
// var colours = ["Red", "Yellow", "Blue"];

// colours.forEach(function(colour) {
//   console.log(colour);
// });

// function colour(holder){
//   console.log(holder);
// }

// colours.forEach(colour);


//To do app running in console
// var action = "";
// var toDo = [];
// var display;
// var addElement;

// while (action !== "quit") {
//   var action = prompt('Enter either "new" OR "list" OR "delete" OR "quit"');

//   if (action === "new") {
//     addTodoItem();
//   }

//   else if (action === "list") {
//     listItems();
//   }

//   else if (action === "delete") {
//     deleteTodoItem();
//   }
// }
// console.log("You Quit the app");


// function deleteTodoItem() {
//   var toDelete = prompt("Enter index to delete");
//   console.log(toDo[toDelete] + " deleted from Todo list");
//   toDo.splice(toDelete, 1);
// }

// function addTodoItem() {
//   addElement = prompt("Enter what you want Todo");
//   toDo.push(addElement);
//   console.log(addElement + " added to list");
// }

// function listItems() {
//   function list(item, i) {
//     console.log("**************************");
//     console.log(i + ": " + item);
//     console.log("**************************");
//   }
//   toDo.forEach(list);
// }
