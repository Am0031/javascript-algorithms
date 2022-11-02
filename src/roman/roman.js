//function that reads a roman number and return its integer value

const roman = (string) => {
  //check the input
  if (typeof string !== "string" || !string.length) return "Not a roman number";
  //define the base numerals
  const base = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //set up a result variable
  let result = 0;

  //loop through each character to add them to the result
  for (let i = 0; i < string.length; i += 1) {
    //get value for current character and its successor
    const currentValue = base[string[i]];
    const nextValue = base[string[i + 1]];

    //if current < next, then current is to be deducted from next (or from overall result)
    currentValue < nextValue
      ? (result -= currentValue)
      : (result += currentValue);
  }

  //return the overall result
  return result;
};

module.exports = { roman };
