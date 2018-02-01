var nums = binarySearch([1,2,3,4,5,6,7,8,9],7);

console.log(nums);

function binarySearch(stuff, searchElement) {
  //Set starting values
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.length - 1;
  var minIndex = 0;

  //main loop
  while (minIndex <= maxIndex) {
    //index position near middle of array
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    //get the element (searchElement), in this case 7
    currentElement = stuff[currentIndex];
    console.log('Start Index: ', minIndex)
    console.log('End Index: ', maxIndex)
    console.log('Current Element: ', stuff[currentIndex])

    //test it
    if (currentElement < searchElement) {
      //if less than target, look above value
      minIndex = currentIndex + 1;
    }
    else if (currentElement > searchElement) {
      //if greater than target, look below value
      maxIndex = currentIndex - 1;
    }
    else {
      //hit target, return the index
      console.log('Current Index: ', currentIndex)
      console.log('Current Element: ', stuff[currentIndex])
      console.log(' ------------ ')
      return currentIndex;
    }
  }
  return false;
}
