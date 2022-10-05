//function that finds the most frequent  item in an array using the hash table method

const mostFrequent = (array) => {
  //reduce array to create hash table - initial table is an empty new Map
  const hashTable = array.reduce((table, current) => {
    const itemCount = table.has(current) ? table.get(current) : 0;
    table.set(current, itemCount + 1);
    return table;
  }, new Map());

  //reduce entries to find the largest one
  const highestEntry = [...hashTable.entries()].reduce((prev, current) =>
    current[1] > prev[1] ? current : prev
  );

  return { key: highestEntry[0], value: highestEntry[1] };
};

module.exports = { mostFrequent };
