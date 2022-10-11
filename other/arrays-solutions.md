# JavaScript algorithms to practice - Arrays - My Solutions

These are the solutions I worked out for some of the practice algorithms questions compiled in the [arrays.md](arrays.md) file. There might be other and more efficient ways to resolve the questions.

1. Write a JavaScript function to check whether an `input` is an array or not.

```js
const is_Array = (arr) => Array.isArray(arr);
```

2. Write a JavaScript function to clone an array.

```js
const array_clone = (arr) => {
  const clonedArray = [...arr];
  return clonedArray;
};
```

Note: other alternatives to clone: Array.from(arr), .slice(), .map((i)=> i), .filter(()=> true)

3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

```js
const first = (arr, n) => {
  if (!arr) return 0;
  if (!n) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
};
```

4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

```js
const last = (arr, n) => {
  if (!n) return arr[arr.length - 1];
  return arr.slice(-n);
};
```

5. Write three different JavaScript instructions to join all elements of the following array into a string and get the expected outputs.

```js
const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join()); // or console.log(myColor.join(","));
console.log(myColor.join("+"));
```

6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

```js
//option: using window.prompt to get input from user and ensures the front 0 is not removed
const testValue = window.prompt().toString();

//in any case, make we pass a string to the function
const testValue = "025468";

//then reduce the string to format it
const format = (str) => {
  const reducer = (acc, val) => {
    const lastVal = [...acc][acc.length - 1];
    if (lastVal % 2 == 0 && val % 2 == 0) {
      acc += "-";
    }
    return (acc += val);
  };

  return [...str].reduce(reducer, "");
};

console.log(format(testValue));
```

7. Write a JavaScript program to sort the items of an array.

Can be done with a bubble sort (nested loops):

```js
const sort = (array) => {
  if (!array || array.length <= 1) return array;

  for (let i = 0; i < array.length - 1; i += 1) {
    for (let ii = 0; ii < array.length - 1; ii += 1) {
      if (array[ii] > array[ii + 1]) {
        const temp = array[ii + 1];
        array[ii + 1] = array[ii];
        array[ii] = temp;
      }
    }
  }
  return array;
};

console.log(sort([3, 8, 7, 6, 5, -4, -3, 2, 1]));
```

But it could be done with other types of sorting (merge sort, heap sort, etc...).

8. Write a JavaScript program to find the most frequent item of an array.

Can be achieved with two loops(with 1 nested loop)

```js
const mostFrequent = (arr) => {
  let maxCount = 1;
  let count = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) m++;
      if (maxCount < count) {
        maxCount = count;
        item = arr[i];
      }
    }
    count = 0;
  }
  return `${item} ( ${maxCount} times ) `;
};

console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
```

But we can also avoid nested loops by using hash table and go through 2 consecutive loops:

```js
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

  return `${highestEntry[0]} (${highestEntry[1]} times)`;
};
```

9. Write a JavaScript program which accept a string as input and swap the case of each character.

```

```
