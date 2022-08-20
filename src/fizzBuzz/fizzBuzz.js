//function to return a string of all results when passing each number into the fizzbuzz test

//1st version - all in 1 function
const fizzBuzz = (fizzNum, buzzNum, count) => {
  const result = [];

  for (let i = 1; i <= count; i += 1) {
    let output = "";
    if (i % fizzNum === 0) output += "Fizz";
    if (i % buzzNum === 0) output += "Buzz";

    if (output === "") output += i;

    result.push(output);
  }

  return result.join(", ");
};

//2nd version - split for more reuseable functions
const getFizzBuzzString = (fizzNum, buzzNum, num) => {
  let output = "";
  if (num % fizzNum === 0) output += "Fizz";
  if (num % buzzNum === 0) output += "Buzz";

  return !!output ? output : num;
};
const fizzBuzz2 = (fizzNum, buzzNum, count) => {
  const result = [];
  for (let i = 1; i <= count; i += 1) {
    result.push(getFizzBuzzString(fizzNum, buzzNum, i));
  }
  return result.join(", ");
};

module.exports = { fizzBuzz, fizzBuzz2, getFizzBuzzString };
