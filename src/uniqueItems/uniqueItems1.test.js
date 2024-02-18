//requiring the uniqueItems.js function
const { uniqueItems1 } = require("./uniqueItems1");

describe("uniqueItems1", () => {
  it("should return an array with each existing item from the original array only once in it", () => {
    const arr = [2, 8, 2, 7, 5, 4, 19, 4, 5, 8];
    const expected = [2, 8, 7, 5, 4, 19];
    const result = uniqueItems1(arr);
    expect(result).toEqual(expected);
  });
  it("should return an array with each existing item from the original array only once in it", () => {
    const arr = [2, 8, 2, 5, 4, 4, 5, 8];
    const expected = [2, 8, 5, 4];
    const result = uniqueItems1(arr);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when the original array is empty []", () => {
    const arr = [];
    const expected = [];
    const result = uniqueItems1(arr);
    expect(result).toEqual(expected);
  });
});
