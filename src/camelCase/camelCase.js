//function that takes a string and returns the string in camel case

const camelCase = (string) => {
  const items = string.trim().toLowerCase().split(" ");

  const formattedItems = [];

  formattedItems.push(items[0]);
  for (let i = 1; i < items.length; i += 1) {
    const string = items[i];
    const formattedItem = string.charAt(0).toUpperCase() + string.slice(1);
    formattedItems.push(formattedItem);
  }

  return formattedItems.join("");
};

module.exports = { camelCase };
