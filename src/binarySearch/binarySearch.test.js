//requiring the binarySearchRecursive.js function
const { binarySearchRecursive } = require("./binarySearch");

describe("binarySearch", () => {
  it("should return the index of 1 when looking for the number 8 in this array [1, 8, 21, 22, 82]", () => {
    const arr = [1, 8, 21, 22, 82];
    const target = 8;
    const expected = 1;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });

  it("should return the index of 5 when looking for the number 8 in this array [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82]", () => {
    const arr = [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82];
    const target = 8;
    const expected = 5;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });

  it("should return the index of -1 when the array is empty []", () => {
    const arr = [];
    const target = 6;
    const expected = -1;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });

  it("should return the index of 0 when looking for the number 4 in this array [4]", () => {
    const arr = [4];
    const target = 4;
    const expected = 0;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });

  it("should return the index of -1 when looking for the number 6 in this array [4]", () => {
    const arr = [4];
    const target = 6;
    const expected = -1;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });

  it("should return the index of -1 when the number 8 does not exist in this array [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82]", () => {
    const arr = [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82];
    const target = 6;
    const expected = -1;
    const start = 0;
    const end = arr.length;
    const result = binarySearchRecursive(arr, target, start, end);
    expect(result).toEqual(expected);
  });
});
