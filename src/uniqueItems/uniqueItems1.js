//function to filter an array to only get unique items back in an array format

const uniqueItems1 = (arr) => {
  const result = [...new Set(arr)];
  return result;
};

module.exports = { uniqueItems1 };
