//*******Creating Methods and Using them*********** */

obj = {
  name: "Evans",
  cool: false,
  age: 32,
  friends: ["bob", "max"],
  add: function func(x,y) {
    return x*y;    
  }
}
console.log(obj.add(8,9));

//******Accessing objects and using functions******* */

//Typical way of doing it
// var comments = {
//   data: ["Good", "bad", "What"],
// };

// print(comments.data);

// function print(array) {
//   array.forEach(element => {
//     console.log(element);  
//   });
// }

//Alternative and advanced way of doing it
// by writing 'this' inside a method. it refers to the oject
//the method is defined in
var comments = {
  data: ["Good", "bad", "What"],
  print: function () {
    this.data.forEach(element => {
      console.log(element);  
    });}
};

comments.print();





