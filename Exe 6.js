//*********CREATE YOUR OWN FOR EACH LOOP **********/

// var nums = [1, 2, 3, 4];


// //**Typical ForEach Loop with annonymous function** */

// nums.forEach(function (element) {
//   console.log(element);
// });

// // ***************OR Seperated function************

// nums.forEach(numbers);

// function numbers(element) {
//   console.log(element);
// }

//Create own function taking 2 arguments

// myForEach(nums, addSomething);

// function myForEach(array, func) {
//   for (var i=0; i < nums.length; i++) {
//     console.log(nums[i]);
//     addSomething();
//   }
// }

// function addSomething(names){
//   console.log("2+2" +names);
// }

//Create own myForEach function using objects

Array.prototype.myForEach=adding; 

function adding(func){
  for (var i=0; i < this.length; i++){
    func(this[i]);
  }
}
var friends =["Esco", "Buddy"];

friends.myForEach(alert);
friends.myForEach(tellLove);

function tellLove(name){
  console.log("I Love " +name)

}







