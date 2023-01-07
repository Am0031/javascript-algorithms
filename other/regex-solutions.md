# JavaScript algorithms to practice - RegEx - Solutions

These are the solutions I worked out for some of the practice algorithms questions compiled in the [regex.md](regex.md) file. There might be other and more efficient ways to resolve the questions.

Note: I worked out my solutions in Codepen so the expected return is provided by a console.log as shown below, but the output could be obtained differently, for example confirmed by a jest test or rendered in the browser.

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

Other solution if we want to return something more formatted than true/false:

```js
const checkFirstLetter = (str) => {
  const regex = /^[A-Z]/;
  return `First character is ${regex.test(str) ? "uppercase" : "lowercase"}`;
};

console.log(checkFirstLetter("Hello")); //returns "First character is uppercase"
```

2. Write a JavaScript program to check a credit card number.

Check for each type of card:

- Visa :- Starting with 4, length 13 or 16 digits -> /^4[0-9]{12}(?:[0-9]{3})?$/
- MasterCard :- Starting with 51 through 55, length 16 digits -> /^5[1-5][0-9]{14}$/
- Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits -> /^6(?:011|5[0-9]{2})[0-9]{12}$/
- American Express :- Starting with 34 or 37, length 15 digits -> /^3[47][0-9]{13}$/
- Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits -> /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
- JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits -> /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/

```js
const number1 = 340125789963581; //american express
const number2 = 4152637485964; //mastercard
const number3 = 111222333444; //none of the above patterns

const check = (str) => {
  const regex =
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  return regex.test(str);
};

console.log(check(number1)); //return true
console.log(check(number2)); //return true
console.log(check(number3)); //return false
```

3. Write a pattern that matches e-mail addresses.

The function returns `true` if the string matches an email pattern, and `false` if it doesn't.

```js
const isValidEmail = (str) => {
  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regex.test(str);
};

console.log(isValidEmail("john452@gmail.com")); //returns true
console.log(isValidEmail("f4d5e86s@example")); //returns false
console.log(isValidEmail("111222333444@yahoo.co.uk")); //return true
```

4. Write a JavaScript program to search a date within a string. The date format to find is dd/mm/yyyy.

```js
const containsDate = (str) => {
  const regex =
    /(3[01]|[12][0-9]|0?[1-9])\/(1[0-2]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}/;
  return regex.test(str);
};

console.log(containsDate("Tuesday 23/02/1985 15:30:45 GMT")); //returns true
console.log(containsDate("Tuesday 23-02-1985 15:30:45 GMT")); //returns false
console.log(containsDate("Tuesday 23 Feb 15:30:45 GMT")); //returns false
```

5. Write a JavaScript program that work as a trim function (trimming a string) using a regular expression.

```js
const trim = (str) => {
  return str.replace(/^\s+|\s+$/g, "");
};

console.log(trim(" tuesday 23 feb "));
console.log(trim("   word "));
console.log(trim("hello"));
```
