//function to return the index of a given number in an array of numbers using binary search

// 1st approach - recursive approach:
// Find the middle index for the given array
// Compare the middle element with the given number. If equal return index.
// If greater, call the same function with ending index = middle-1 and repeat.
// If smaller, call the same function with starting index = middle+1 and repeat.

const binarySearchRecursive = (arr, target) => {
  //validate inputs are not undefined
  if (!arr || !target) return undefined;

  const binarySearch = (arr, target, start, end) => {
    // Base Condition
    if (start > end) return -1;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with target number
    if (arr[mid] === target) return mid;

    // If element at mid is greater than target,
    // search in the left half of arr
    if (arr[mid] > target) {
      return binarySearch(arr, target, start, mid - 1);
    }

    // If element at mid is smaller than target,
    // search in the right half of arr
    else {
      return binarySearch(arr, target, mid + 1, end);
    }
  };

  return binarySearch(arr, target, 0, arr.length - 1);
};

// 2nd approach - iterative approach:
//define variables for start and end of array to search
// Find the middle index for the given array
// Compare the middle element with the given number. If equal return index.
// If greater, reassign the end index = middle-1 and while loop continues until target is found.
// If smaller, reassign the start index = middle+1 and while loop continues until target is found.
// while loop stops when start > end, target is not in array so return -1.

const binarySearchIterative = (arr, target) => {
  //validate inputs are not undefined
  if (!arr || !target) return undefined;

  // define start and end
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Find the middle index
    let mid = Math.floor((start + end) / 2);
    // Compare mid with target number
    if (arr[mid] === target) return mid;
    // If element at mid is greater than target,
    // search in the left half of arr
    else if (arr[mid] < target) start = mid + 1;
    // If element at mid is smaller than target,
    // search in the right half of arr
    else end = mid - 1;
  }
  return -1;
};

module.exports = { binarySearchRecursive, binarySearchIterative };
