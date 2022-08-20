const { fizzBuzz, fizzBuzz2 } = require("./fizzBuzz");

describe("fizzBuzz", () => {
  it("should return the given string when given two numbers", () => {
    const expected =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz";
    const num1 = 3;
    const num2 = 5;
    const count = 100;
    const result = fizzBuzz(num1, num2, count);
    expect(result).toMatch(expected);
  });
  it("should return the given string when given two numbers", () => {
    const expected =
      "1, 2, 3, 4, Fizz, 6, Buzz, 8, 9, Fizz, 11, 12, 13, Buzz, Fizz, 16, 17, 18, 19, Fizz, Buzz, 22, 23, 24, Fizz, 26, 27, Buzz, 29, Fizz, 31, 32, 33, 34, FizzBuzz, 36, 37, 38, 39, Fizz, 41, Buzz, 43, 44, Fizz, 46, 47, 48, Buzz, Fizz, 51, 52, 53, 54, Fizz, Buzz, 57, 58, 59, Fizz, 61, 62, Buzz, 64, Fizz, 66, 67, 68, 69, FizzBuzz, 71, 72, 73, 74, Fizz, 76, Buzz, 78, 79, Fizz, 81, 82, 83, Buzz, Fizz, 86, 87, 88, 89, Fizz, Buzz, 92, 93, 94, Fizz, 96, 97, Buzz, 99, Fizz";
    const num1 = 5;
    const num2 = 7;
    const count = 100;
    const result = fizzBuzz(num1, num2, count);
    expect(result).toMatch(expected);
  });
  it("should return the given string when given two numbers", () => {
    const expected =
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz";
    const num1 = 3;
    const num2 = 5;
    const count = 100;
    const result = fizzBuzz2(num1, num2, count);
    expect(result).toMatch(expected);
  });
  it("should return the given string when given two numbers", () => {
    const expected =
      "1, 2, 3, 4, Fizz, 6, Buzz, 8, 9, Fizz, 11, 12, 13, Buzz, Fizz, 16, 17, 18, 19, Fizz, Buzz, 22, 23, 24, Fizz, 26, 27, Buzz, 29, Fizz, 31, 32, 33, 34, FizzBuzz, 36, 37, 38, 39, Fizz, 41, Buzz, 43, 44, Fizz, 46, 47, 48, Buzz, Fizz, 51, 52, 53, 54, Fizz, Buzz, 57, 58, 59, Fizz, 61, 62, Buzz, 64, Fizz, 66, 67, 68, 69, FizzBuzz, 71, 72, 73, 74, Fizz, 76, Buzz, 78, 79, Fizz, 81, 82, 83, Buzz, Fizz, 86, 87, 88, 89, Fizz, Buzz, 92, 93, 94, Fizz, 96, 97, Buzz, 99, Fizz";
    const num1 = 5;
    const num2 = 7;
    const count = 100;
    const result = fizzBuzz2(num1, num2, count);
    expect(result).toMatch(expected);
  });
});
