//function that takes a string and returns the string in camel case

const isPalindrome = (string) => {
  //spread the characters into an array
  const charArray = [...string.toLowerCase()];
  //check the array is not empty
  if (charArray.length === 0) return false;

  //compare the first and last character
  while (charArray.length > 1) {
    if (charArray.shift() !== charArray.pop()) return false;
  }

  //return true
  return true;
};

module.exports = { isPalindrome };
