
// Put comments
var firstName = prompt("What is Your First Name");
var lastName = prompt("What is Your Last Name");
var age = Number(prompt("What is Your Age"));
var daysAlive = age*365;
var enterClub;

alert("Your full name is "+firstName +" " +lastName);
console.log("Your full name is "+firstName +" " +lastName);
alert("Your are " + age + " years old. Roughly " + daysAlive + " days old.");
console.log("Your are " + age +"years old OR days alive: "+ daysAlive);

if (age<0){
  console.log("Error Age");
}

if (age%2!==0){
  console.log("Your Age is odd");
}

if (Number.isInteger(Math.sqrt(age))){
  console.log("Your Age is a perfect square");
}

if (age==21){
  console.log("Happy 21st Birthday");
}

if(age<18){
  console.log("Your can't enter club");
  }
  else if (age<21){
    console.log("Your can enter club but cant drink");
}

  else {
    console.log("Your can enter club and drink");
}




