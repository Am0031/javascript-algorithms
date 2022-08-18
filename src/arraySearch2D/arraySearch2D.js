//function that takes in a two-dimensional (2D) array and searches each 2D element for the character `X`

const arraySearch2D = (array) => {
  let number = 0;
  array.map((y) =>
    y.map((x) => {
      if (x === "X") {
        number += 1;
      }
    })
  );
  return number;
};

module.exports = { arraySearch2D };
