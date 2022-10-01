//import the class MaxHeap
const MaxHeap = require("./MaxHeap");
const MinHeap = require("./MinHeap");

//function that sorts an array in descending order using the heap sort method
const heapSortMax = (array) => {
  //check valid array and length of array
  if (!array || array.length < 2) return array;

  //heap sort method
  const sorted = [];
  let heap1 = new MaxHeap();

  //create the heap from the array (binary tree with max at top)
  for (let i = 0; i < array.length; i++) {
    heap1.insert(array[i]);
  }

  //get elements from the heap and populate array in descending order
  for (let i = 0; i < array.length; i++) {
    sorted.push(heap1.delete());
  }
  //return sorted array
  return sorted;
};

const heapSortMin = (array) => {
  //check valid array and length of array
  if (!array || array.length < 2) return array;

  //heap sort method
  const sorted = [];
  let heap2 = new MinHeap();

  //create the heap from the array (binary tree with min at top)
  for (let i = 0; i < array.length; i++) {
    heap2.insert(array[i]);
  }

  //get elements out of the heap and populate array in ascending order
  for (let i = 0; i < array.length; i++) {
    sorted.push(heap2.delete());
  }
  //return sorted array
  return sorted;
};

module.exports = { heapSortMax, heapSortMin };
