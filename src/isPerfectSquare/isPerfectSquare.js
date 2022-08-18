//function to return true when the number is a perfect square.

const isPerfectSquare = (number) => {
  let status = false;

  let i = 1;
  while (status === false && i < number) {
    const square = i * i;
    square === number ? status === true : (i += 1);
  }

  return status;
};

module.exports = { isPerfectSquare };
