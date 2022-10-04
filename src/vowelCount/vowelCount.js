const vowelCount = (str) =>
  //check if input if of type string
  //if string, use Regex to filter out the non vowel characters, and return length of the result(the string of only vowels)
  //if not a string, return -1
  typeof str === "string" ? str.replace(/[^(aeiou)]/gi, "").length : -1;

module.exports = { vowelCount };
