//function to extracts items that appear only once in an original array

const uniqueItems2 = (arr) => {
  const result = arr.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc.filter((el) => item !== el);
    } else {
      acc.push(item);
      return acc;
    }
  }, []);
  return result;
};

module.exports = { uniqueItems2 };
