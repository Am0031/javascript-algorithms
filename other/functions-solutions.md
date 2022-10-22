# JavaScript algorithms to practice - Functions - Solutions

These are the solutions I worked out for some of the practice algorithms questions compiled in the [functions.md](functions.md) file. There might be other and more efficient ways to resolve the questions.

Note: I worked out my solutions in Codepen so the expected return is provided by a console.log as shown below, but the output could be obtained differently, for example confirmed by a jest test or rendered in the browser.

1. Write a JavaScript function that reverse a number.

We can use string and array methods to reverse the number:

```js
const reverseNum = (num) =>
  parseInt(num.toString().split("").reverse().join(""));

console.log(reverseNum(1234)); //returns 4321
```

It is also possible to only use string methods (and not change into array and back):

```js
const reverseNum = (num) => {
  let reversed = "";
  for (let i of num.toString()) {
    reversed = i + reversed;
  }
  return parseInt(reversed);
};

console.log(reverseNum(1234567)); //returns 7654321
```

2. Write a JavaScript function that generates all combinations of a string.

```js
const combinations = (str) => {
  const combiArray = [];
  for (let i = 0; i < str.length; i++) {
    let string = "";
    for (let ii = i; ii < str.length; ii++) {
      string += str[ii];
      combiArray.push(string);
    }
  }
  return combiArray;
};

console.log(combinations("doggy"));
```
