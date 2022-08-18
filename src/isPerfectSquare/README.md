# Is Perfect Square

In this activity we will be writing code to create a function that takes in a whole number, then returns `true` if the number is a [perfect square](https://en.wikipedia.org/wiki/Square_number) and otherwise returns `false`.

## Details

We will be writing code in the body of the `isPerfectSquare()` function to achieve the following:

- If `num` is a [perfect square](https://en.wikipedia.org/wiki/Square_number), return `true`. Otherwise, return `false`.

- A perfect square is a number that has a whole number as a square root.

- See the following number for an example:

      ```js
      const num = 36; // Square root of 36 is 6
      ```

- Given the preceding number, `true` should be returned.

- See the following number for another example:

      ```js
      const num = 50; // Square root of 50 is 7.07106781187
      ```

- Given the preceding number, `false` should be returned.

- **Note**: we will aim to complete this problem without using the built-in `Math.sqrt()` method.

So if we aren't allowed to check the square root of the given number, can we check whether the square of the number is the given number?
