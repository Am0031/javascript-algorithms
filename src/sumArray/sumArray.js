//function that adds up all the elements in an array and return the total

const sumArray = (array) => {
  //check the array we received
  if (!array) return undefined;

  //go through the array and add the values to the accumulator and return the total value
  return array.reduce((acc, value) => acc + value, 0);
};

module.exports = { sumArray };
