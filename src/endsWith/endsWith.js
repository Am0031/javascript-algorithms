//function that takes a string and returns the string in camel case

//testing with the new endsWith function available with ES2015 - function is case-sensitive
const endsWith = (str, target) => {
  //check inputs
  if (!str || !target) return false;
  //compare using the endsWith() function from ES2015
  return str.toLowerCase().endsWith(target.toLowerCase());
};

//using substr method - also want to cater for different casing (as per above)
const endsWith2 = (str, target) => {
  //check inputs
  if (!str || !target) return false;

  //compare the portion of the string to the target and return result
  return str.toLowerCase().substr(-target.length) === target.toLowerCase();
};

module.exports = { endsWith, endsWith2 };
