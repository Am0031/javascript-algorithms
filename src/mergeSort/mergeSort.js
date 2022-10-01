//function that sorts an array using the mergeSort method

const merge = (leftArray, rightArray) => {
  //temporary array to hold the sorted items
  let sortedArray = [];
  while (leftArray.length && rightArray.length) {
    //when there's only 1 item left, it's always the biggest item
    //compare the 2 items
    if (leftArray[0] < rightArray[0]) {
      //move smaller item into the sorted array - and item is removed from left array
      sortedArray.push(leftArray.shift());
    } else {
      //move smaller item into the sorted array - and item is removed from the right array
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
};

const mergeSort = (array) => {
  //check valid array and length of array
  if (!array || array.length < 2) return array;

  //merge sort method
  //find the middle of the array
  const mid = Math.floor(array.length / 2);
  //1st part - split the array into 2
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);

  //keep splitting the arrays until they contain only 0 or 1 item
  leftArray = mergeSort(leftArray);
  rightArray = mergeSort(rightArray);

  //apply the merge to the split items
  return merge(leftArray, rightArray);
};

module.exports = { mergeSort };
