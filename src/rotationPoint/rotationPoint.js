//function that find the index of the rotation point in an array

const rotationPoint = (array) => {
  //check array is of type array and has some items in it
  if (Array.isArray(array) && array.length) {
    //loop through array - binary method
    //set the edges of the array to check - start with full array
    let left = 0;
    let right = array.length - 1;
    //iterate over the portion until there is no more items to compare
    while (left <= right) {
      //find the middle
      const middle = Math.floor((right + left) / 2);
      //compare middle and middle+1
      if (array[middle + 1] < array[middle]) {
        // if out of order at this point, return middle+1 index
        return middle + 1;
      }
      //if in order, continue to next comparison - to know which side to go to
      if (array[left] > array[middle]) {
        //if not in order, redefine array to left side
        right = middle;
      } else {
        //otherwise, redefine array to right side
        left = middle + 1;
      }
    }
  }
  //if input is not an array, or array is not rotated, return -1
  return -1;
};

module.exports = { rotationPoint };
