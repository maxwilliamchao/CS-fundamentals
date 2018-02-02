// A small set of numbers
var arraySize = 40;

// A large set of numbers
// var arraySize = 400000

var array = [];

for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function selectionSort(items) {
  var len = items.length;
  var min;

  for (var i = 0; i < len; i++) {

    //set index of minimum to this position
    min = i;

    //check the rest of the array to see if anything is smaller
    for (var j = i + 1; j < len; j++) {
      if(items[j] < items[min]) {
        min = j;
      }
    }

    //if the current position isn't the minimum, swap it and the minimum
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

//function call
console.log('Pre-Sort');
console.log(array.join(' '));
console.log('--------------------------------');
console.log('Post-Sort');
console.log(selectionSort(array).join(' '));