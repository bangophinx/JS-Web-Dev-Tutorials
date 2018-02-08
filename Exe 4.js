// function doSomething(){
//   console.log("Hello World");
//   console.log("Goodbye");
// }
// doSomething();

// function square(num){
//   console.log(num*num);
// }
// square(2);

// function hello(name){
//   console.log("Hello "+name);
// }

// hello("Mary");

// function area(length, width){
//   var a=length*width;
//   return a;
// } 
// var areaOfRec = area(9,4);
// console.log(areaOfRec);

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log("Your Value is: " + isEven(4));
// console.log("Your Value is: " + isEven(21));
// console.log("Your Value is: " + isEven(68));
// console.log("Your Value is: " + isEven(333));

// function isFactorial(num) {
//     var result =1;
//     for (i = 1; i <= num; i++) {
//       result*=i;
//     }
//     return result;
// }

// console.log("Your Value is: " + isFactorial(5));
// console.log("Your Value is: " + isFactorial(4));
// console.log("Your Value is: " + isFactorial(10));
// console.log("Your Value is: " + isFactorial(0));


// function kebabToSnake(str) {
//   var dashPos = str.indexOf("-");
//   if (dashPos === -1) {
//     var snakeCase = str;
//   }
//   else {
//     var snakeCase = str;
//     while (dashPos !== -1) {
//       var firstWord = snakeCase.slice(0, dashPos);
//       var secondWord = snakeCase.slice(dashPos + 1, str.length);
//       snakeCase = firstWord + "_" + secondWord;
//       dashPos = snakeCase.indexOf("-");
//     }
//   }
//   return snakeCase;
// }

// console.log(kebabToSnake("Evans-Chikarakara"));
// console.log(kebabToSnake("blah"));
// console.log(kebabToSnake("dogs-are-awesome"));
// console.log(kebabToSnake("Esco-The-Great_Done-Did-It-Again"));


// function kebabToSnake2(str){
//   var newStr = str.replace(/-/g, "_");
//   return newStr;
// }

// console.log(kebabToSnake2("Evans-Chikarakara"));
// console.log(kebabToSnake2("blah"));
// console.log(kebabToSnake2("dogs-are-awesome"));
// console.log(kebabToSnake2("Esco-The-Great_Done-Did-It-Again"));