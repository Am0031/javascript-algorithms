//function that finds the largest number in an array and returns that number

const largestNumber = (array) => {
  array.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  return array[0];
};

module.exports = { largestNumber };
