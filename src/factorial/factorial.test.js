//requiring the factorial.js function
const { factorial } = require("./factorial");

describe("factorial", () => {
  it("should return the number '1' when given the number '0'", () => {
    const expected = 1;
    const num = 0;
    const result = factorial(num);
    expect(result).toEqual(expected);
  });

  it("should return the number '1' when given the number '1'", () => {
    const expected = 1;
    const num = 1;
    const result = factorial(num);
    expect(result).toEqual(expected);
  });

  it("should return the number '6' when given the number '3'", () => {
    const expected = 6;
    const num = 3;
    const result = factorial(num);
    expect(result).toEqual(expected);
  });

  it("should return the number '24' when given the number '4'", () => {
    const expected = 24;
    const num = 4;
    const result = factorial(num);
    expect(result).toEqual(expected);
  });

  it("should return the string 'undefined' when given a negative number", () => {
    const expected = "undefined";
    const num = -4;
    const result = factorial(num);
    expect(result).toEqual(expected);
  });
});
