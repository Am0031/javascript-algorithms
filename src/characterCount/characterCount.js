//function that takes a string and returns an object containing the characters in the string and the number of times they appear

const characterCount = (string) => {
  let object = {};
  for (const s of string) {
    if (object.hasOwnProperty(s)) {
      object[s] = object[s] + 1;
    } else {
      object[s] = 1;
    }
  }
  return object;
};

module.exports = { characterCount };
