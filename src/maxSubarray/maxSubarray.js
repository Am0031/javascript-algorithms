const maxSubarray = (arr) => {
  //empty array
  if (arr.length === 0) {
    return "Input array doesn't contain any elements.";
  }
  //constraint 1
  if (arr.length > 1000000) {
    return "Input array length exceeds maximum allowed value of 10^6.";
  }
  //constraint 2
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < -1000 || arr[i] > 1000) {
      return "Array elements must be within the range -10^3 to 10^3.";
    }
  }

  let maxEndingHere = arr[0];
  let maxSoFar = arr[0];
  let maxElement = Math.min(...arr);

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
    maxElement = Math.max(maxElement, num);
  }

  return Math.max(maxSoFar, maxElement);
};

module.exports = { maxSubarray };
