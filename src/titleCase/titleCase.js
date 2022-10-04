//function that takes a string and returns the string in title case

const titleCase = (str) => {
  //check the input is a string
  if (typeof str !== "string") return "";

  //separate the words into an array
  const items = str.trim().toLowerCase().split(" ");

  //map over the array to format each word and join to return as formatted string
  return items
    .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
    .join(" ");
};

module.exports = { titleCase };
