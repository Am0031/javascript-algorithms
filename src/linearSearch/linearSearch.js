//function to return the index of a given number in an array of numbers
// target is to not use indexOf(), lastIndexOf() or includes() methods

const linearSearch = (target, arr) => {
  const numbersArray = arr;
  const targetNumber = target;
  let index = -1;

  for (let i = 0; i < numbersArray.length; i += 1) {
    const status = numbersArray[i] === targetNumber;
    if (status) {
      index = i;
      break;
    }
  }

  return index;
};

module.exports = { linearSearch };
