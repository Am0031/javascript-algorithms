//function to return the factorial of a given number

const factorial = (num) => {
  let result = 1;
  if (num > 1) {
    for (let i = 1; i <= num; i += 1) {
      result *= i;
    }
    return result;
  } else if (num === 1) {
    return result;
  } else if (num === 0) {
    return result;
  } else if (num < 0) {
    return "undefined";
  }
};

module.exports = { factorial };
