const vowelCount = (str) => {
  //check input
  if (typeof str !== "string") return -1;

  //return length
  return str.replace(/[^(aeiou)]/gi, "").length;
};

module.exports = { vowelCount };
