const { plusOne } = require("./plusOne");

describe("plusOne", () => {
  it("should return the array [1, 2, 4] when given the array [1, 2, 3] ", () => {
    const expected = [1, 2, 4];
    const array = [1, 2, 3];
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [1] when given the array [] ", () => {
    const expected = [1];
    const array = [];
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [1, 0, 0] when given the array [9, 9] ", () => {
    const expected = [1, 0, 0];
    const array = [9, 9];
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [7, 8, 7, 0] when given the array [7, 8, 6, 9] ", () => {
    const expected = [7, 8, 7, 0];
    const array = [7, 8, 6, 9];
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an object ", () => {
    const expected = [];
    const array = {};
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an undefined ", () => {
    const expected = [];
    const array = undefined;
    const result = plusOne(array);
    expect(result).toEqual(expected);
  });
});
