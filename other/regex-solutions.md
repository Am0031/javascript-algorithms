# JavaScript algorithms to practice - RegEx - Solutions

These are the solutions I worked out for some of the practice algorithms questions compiled in the [regex.md](regex.md) file. There might be other and more efficient ways to resolve the questions.

1. Write a JavaScript program to test the first character of a string is uppercase or not.

The function returns `true` if the string does start with a capital letter, and `false` if it doesn't.

```js
const checkFirstLetter = (str) => {
  const regex = /^[A-Z]/;
  return regex.test(str);
};

console.log(checkFirstLetter("Cats are the best")); //returns true
console.log(checkFirstLetter("yes I agree!")); //returns false
```

2. Write a JavaScript program to check a credit card number.

```
coming soon!
```