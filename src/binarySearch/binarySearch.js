//function to return the index of a given number in an array of numbers
// 1st approach - recursive approach:
// Find the middle index for the given array
// Compare the middle element with the given number. If equal return true.
// If greater, call the same function with ending index = middle-1 and repeat.
// If smaller, call the same function with starting index = middle+1 and repeat.

const binarySearchRecursive = (arr, target, start, end) => {
  // Base Condition
  if (start > end) return -1;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with target number
  if (arr[mid] === target) return mid;

  // If element at mid is greater than target,
  // search in the left half of arr
  if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }

  // If element at mid is smaller than target,
  // search in the right half of arr
  else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
};

module.exports = { binarySearchRecursive };
