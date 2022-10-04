const { sieve } = require("./sieve");

describe("sieve", () => {
  it("should return the array [2, 3, 5, 7, 11, 13] when given the number 15 ", () => {
    const expected = [2, 3, 5, 7, 11, 13];
    const number = 15;
    const result = sieve(number);
    expect(result).toEqual(expected);
  });
  it("should return the array [2] when given the number 2 ", () => {
    const expected = [2];
    const number = 2;
    const result = sieve(number);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given the number 1 ", () => {
    const expected = [];
    const number = 1;
    const result = sieve(number);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given the number 0 ", () => {
    const expected = [];
    const number = 0;
    const result = sieve(number);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given a negative number", () => {
    const expected = [];
    const number = -3;
    const result = sieve(number);
    expect(result).toEqual(expected);
  });
});
