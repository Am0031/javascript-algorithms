//function that finds the most frequent  item in an array using the hash table method

const mostFrequent = (array) => {
  //use hashtable method
  //create a hash table
  // const hashTable = new Map();
  //loop over array to populate the hashTable
  // array.forEach((i) => {
  //   const itemCount = hashTable.has(i) ? hashTable.get(i) : 0;
  //   hashTable.set(i, itemCount + 1);
  // });

  //reduce array to create hash table
  const hashTable = array.reduce((table, current) => {
    const itemCount = table.has(current) ? table.get(current) : 0;
    table.set(current, itemCount + 1);
    return table;
  }, new Map());

  //iterate over the keys to find the largest entry
  const highestEntry = [...hashTable.entries()].reduce((prev, current) =>
    current[1] > prev[1] ? current : prev
  );

  // const highestValKey = [...hashTable.keys()].reduce((prev, current) => {
  //   const val = hashTable.get(current);
  //   const prevVal = hashTable.get(prev);
  //   return val < prevVal ? prev : current;
  // });
  return { key: highestEntry[0], value: highestEntry[1] };
};

module.exports = { mostFrequent };
