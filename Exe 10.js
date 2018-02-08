
// // Ways of selecting the paragraph tag
// var pSelect1 = document.querySelector("p");
// var pSelect2 = document.querySelector(".special");
// var pSelect3 = document.querySelector("#first");
// var pSelect5 = document.getElementById("first");
// var pSelect7 = document.querySelectorAll(".special")[0];
// var pSelect8 = document.querySelector("h1 + p");

// console.log(pSelect1);
// console.log(pSelect2);
// console.log(pSelect3);
// console.log(pSelect5);
// console.log(pSelect7);
// console.log(pSelect8);
// pSelect1.style.color = "Red";

// Manipulating the tags
var specialClass = document.querySelector(".special");
console.log(specialClass);
specialClass.classList.add("changeColour");

// Manipulating text
var p =document.querySelector("p");
console.log(p.textContent);

var p1 = document.querySelector(".special1");
console.log(p1.innerHTML);

var ul = document.querySelector("ul");
console.log(ul.textContent);


// // Manupulating Attributes
// var img = document.querySelector("img");

// console.log(img);
// console.log(img.getAttribute("src"));
// img.setAttribute("src", "http://www.rap-up.com/app/uploads/2014/12/nas.jpg");
// console.log(img.getAttribute("src"));

// var a = document.querySelector("a");

// console.log(a);
// console.log(a.getAttribute("href"));
// a.setAttribute("href", "https://en.wikipedia.org/wiki/Nas");
// a.textContent = "Link to Nas";
// console.log(a.getAttribute("href"));




