//function that takes a string and returns the string in camel case

const isPalindrome = (string) => {
  //spread the characters into an array
  const charArray = [...string.toLowerCase().replace(/[\W_]/g, "")];
  //check the array is not empty
  if (charArray.length === 0) return false;

  //compare the first and last character
  while (charArray.length > 1) {
    if (charArray.shift() !== charArray.pop()) return false;
  }

  //return true
  return true;
};

const isPalindrome2 = (string) => {
  //formatted the received string
  const formattedString = string.toLowerCase().replace(/[\W_]/g, "");
  //check if the string has at least 1 character to compare
  if (formattedString.length === 0) return false;

  //create reverse string
  const reversedString = formattedString.split("").reverse().join("");
  //compare the two strings
  return formattedString === reversedString;
};

module.exports = { isPalindrome, isPalindrome2 };
