var arraySize = 40;

// // Large set of numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

function insertionSort(items) {
  //index into unsorted section, moving right
  var i;
  //index into sorted section, moving left
  var j;
}