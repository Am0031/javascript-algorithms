//function that finds the largest two numbers in an array and returns the product of both numbers

const bubbleSort = (array) => {
  //check valid array and length of array
  if (!array || array.length <= 1) return array;
  //if array has at least 2 items
  //1st loop to review array as many times as it has items - that works its way back up the array until it reaches the smallest item in position 0
  for (let i = 0; i < array.length - 1; i += 1) {
    //2nd loop to check each pair and swap the items if needed - that brings the biggest number to the last position in the array
    for (let ii = 0; ii < array.length - 1; ii += 1) {
      if (array[ii] > array[ii + 1]) {
        const temp = array[ii + 1];
        array[ii + 1] = array[ii];
        array[ii] = temp;
      }
    }
  }

  return array;
};

module.exports = { bubbleSort };
