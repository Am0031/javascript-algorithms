//function that adds up all the elements in an array and return the total

const sieve = (number) => {
  //set results array
  let results = [];
  //check number first
  //if number is < 2, return empty array
  if (number < 2) return results;
  //if number >=2, create the range array
  let range = [];
  for (let i = 2; i <= number; i += 1) {
    range.push(i);
  }

  //go through the range with sieve method
  while (range.length > 0) {
    //take 1st item in range array and place it in result array
    const num = range.shift();
    results.push(num);
    //filter array to exclude all numbers that are multiples of first number
    const updatedRange = range.filter((i) => i % num !== 0);
    //update range array
    range = updatedRange;
  }

  //return results array
  return results;
};

module.exports = { sieve };
