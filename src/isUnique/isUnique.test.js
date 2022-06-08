//requiring the isUnique.js function
const { isUnique } = require("./isUnique");

describe("isUnique", () => {
  it("should return true when the item exists only once in this array [2, 8, 7, 5, 4, 19]", () => {
    const arr = [2, 8, 7, 5, 4, 19];
    const result = isUnique(arr);
    expect(result).toEqual(true);
  });

  it("should return true when the array is empty []", () => {
    const arr = [];
    const result = isUnique(arr);
    expect(result).toEqual(true);
  });

  it("should return false when the item exist twice in this array [3, 8, 5, 3, -1, 17, 15, 26]", () => {
    const arr = [3, 8, 5, 3, -1, 17, 15, 26];
    const result = isUnique(arr);
    expect(result).toEqual(false);
  });
});
