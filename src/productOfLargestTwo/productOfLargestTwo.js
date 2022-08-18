//function that finds the largest two numbers in an array and returns the product of both numbers

const productOfLargestTwo = (array) => {
  array.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  return array[0] * array[1];
};

module.exports = { productOfLargestTwo };
