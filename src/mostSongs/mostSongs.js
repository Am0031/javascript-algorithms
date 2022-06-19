//function to return the maximum number of elements present in the array, with a maximum sum of 60.

const mostSongs = (array) => {
  array.sort((a, b) => a - b);

  let sum = 0;
  let numberOfSongs = 0;

  for (let i = 0; i < array.length; i += 1) {
    const newSum = sum + array[i];
    if (newSum > 60) {
      return numberOfSongs;
    } else {
      sum = newSum;
      numberOfSongs += 1;
    }
  }
  return numberOfSongs;
};

module.exports = { mostSongs };
