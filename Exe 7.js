//*******OBJECTS*********** */

var movie = [
  {
    hasWatched: true,
    name: "In Bruges",
    rating: 5,
  },
  {
    hasWatched: false,
    name: "Frozen",
    rating: 4.5,
  },
  {
    hasWatched: true,
    name: "Mad Max",
    rating: 5,
  },
  {
    hasWatched: false,
    name: "Les Miserables",
    rating: 3.5,
  }
];
// with for statement
for (var i = 0; i < movie.length; i++) {
  if (movie[i].hasWatched === true) {
    console.log("You have watched " + movie[i].name + " - " + movie[i].rating + " stars.");
  }
  else if (movie[i].hasWatched === false) {
    console.log("You have not watched " + movie[i].name + " - " + movie[i].rating + " stars.");
  }
}

//with for each statement
movie.forEach(function (movie) {
  console.log(printOut(movie))
});

function printOut(element) {
  var result = "You have ";
  if (element.haswatched) {
    result += "watched";
  }
  else {
    result += "not watched";
  }
  result += ' "' + element.name + '" ' + "- ";
  result += +element.rating + " stars";
  return result;
}

