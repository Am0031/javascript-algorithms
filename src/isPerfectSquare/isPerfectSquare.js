//function to return true when the number is a perfect square.

const isPerfectSquare = (num) => {
  let status = false;
  let i = 1;

  while (status === false && i < num) {
    const square = i * i;
    square === num ? (status = true) : (i += 1);
  }

  return status;
};

module.exports = { isPerfectSquare };
