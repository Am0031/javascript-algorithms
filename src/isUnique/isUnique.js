//function to check if an array only contains unique items

const isUnique = (arr) => {
  const numbersArray = [];
  let isInArrayTwice;

  for (let i = 0; i < arr.length; i += 1) {
    isInArrayTwice = numbersArray.includes(arr[i]);
    if (isInArrayTwice) {
      break;
    } else {
      numbersArray.push(arr[i]);
    }
  }

  return isInArrayTwice ? false : true;
};

module.exports = { isUnique };
