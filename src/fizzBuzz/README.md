# Is Perfect Square

In this activity we will be writing code to create a function that goes through the numbers 1 to 100 and for each number:

- returns `Fizz` if the number is divisable by num1,
- returns `Buzz` if the number is divisable by num2,
- returns `FizzBuzz` if the number is divisable by both num1 and num2,
- or returns the number itself.

## Details

We will be writing code in the body of the `fizzBuzz()` function to achieve this.
The result will be a string of all the results produced for each number.

- See the following number for an example:

```js
const num1 = 3;
const num2 = 5;
```

- Given the preceding number, the following string should be returned:

```js
const result =
  "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz,";
```