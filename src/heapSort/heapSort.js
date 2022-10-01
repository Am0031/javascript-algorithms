//import the class MaxHeap
const MaxHeap = require("./MaxHeap");
const MinHeap = require("./MinHeap");

//function that sorts an array in descending order using the heap sort method
const heapSort = (array, isDescending) => {
  //check valid array and length of array
  if (!array || array.length < 2) return array;

  //check if ascending or descending condition
  //then create the heap from the array
  const heap = isDescending ? new MaxHeap(array) : new MinHeap(array);

  //return sorted array
  return heap.sort();
};

module.exports = { heapSort };
