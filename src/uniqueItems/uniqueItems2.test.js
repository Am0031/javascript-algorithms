//requiring the uniqueItems.js function
const { uniqueItems2 } = require("./uniqueItems2");

describe("uniqueItems2", () => {
  it("should return an array containing only the items that were unique in the original array", () => {
    const arr = [2, 8, 2, 7, 5, 4, 19, 4, 5, 8];
    const expected = [7, 19];
    const result = uniqueItems2(arr);
    expect(result).toEqual(expected);
  });
  it("should return an array containing only the items that were unique in the original array", () => {
    const arr = [2, 8, 2, 5, 4, 4, 5, 8];
    const expected = [];
    const result = uniqueItems2(arr);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when the original array is empty []", () => {
    const arr = [];
    const expected = [];
    const result = uniqueItems2(arr);
    expect(result).toEqual(expected);
  });
});
