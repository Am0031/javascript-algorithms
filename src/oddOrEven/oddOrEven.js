//function to check if a number is odd or even (returns string "even" or "odd")

const oddOrEven = (num) => {
  const result = num % 2;

  if (result === 0) {
    return "even";
  } else {
    return "odd";
  }
};

module.exports = { oddOrEven };
