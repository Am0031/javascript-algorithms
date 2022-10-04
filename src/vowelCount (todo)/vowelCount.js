const vowelCount = (str) => {
  //check input
  if (typeof str !== "string") return -1;
  //define vowels
  const regex = /[aeiou]/i;

  //iterate through string
  const containedVowels = [...str].filter((c) => regex.test(c));

  //return length
  return containedVowels.length;
};

module.exports = { vowelCount };
