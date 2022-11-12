//function that takes an array of digits representing a number, add 1 to it and returns the updated corresponding array of digits

const plusOne = (digits) => {
  //check input type
  if (!Array.isArray(digits)) return [];
  //check array is not empty - if so, return [1]
  if (!digits.length) return [1];

  //change input array into string
  let fullStr = "";
  for (let i = 0; i < digits.length; i += 1) {
    fullStr = fullStr + digits[i].toString();
  }

  //change string into number and add 1
  let fullNum = parseInt(fullStr) + 1;
  //change new number back into a result string
  const newStr = fullNum.toString();

  //create new result array from the result string
  const newArr = [];
  for (let n of newStr) {
    newArr.push(parseInt(n));
  }

  //return result array
  return newArr;
};

module.exports = { plusOne };
