//function to return true when the number is a perfect square.

const fizzBuzz = (num1, num2) => {
  let result = "";

  for (let i = 1; i <= 100; i += 1) {
    let output = "";
    if (i % num1 === 0) output += "Fizz";
    if (i % num2 === 0) output += "Buzz";

    output === "" ? (output += i + ", ") : (output += ", ");

    result += output;
  }

  return result;
};

module.exports = { fizzBuzz };
