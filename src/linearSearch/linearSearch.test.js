//requiring the linearSearch.js function
const { linearSearch } = require("./linearSearch");

describe("linearSearch", () => {
  it("should return the index of 5 when looking for the number 8 in this array [82, 22, -4, 21, 1, 8]", () => {
    const arr = [82, 22, -4, 21, 1, 8];
    const target = 8;
    const expected = 5;
    const result = linearSearch(target, arr);
    expect(result).toEqual(expected);
  });

  it("should return the index of 2 when looking for the number 8 in this array [82, 22, 8, -4, 21, 1, 8]", () => {
    const arr = [82, 22, 8, -4, 21, 1, 8];
    const target = 8;
    const expected = 2;
    const result = linearSearch(target, arr);
    expect(result).toEqual(expected);
  });

  it("should return the index of -1 when the array is empty []", () => {
    const arr = [];
    const target = 8;
    const expected = -1;
    const result = linearSearch(target, arr);
    expect(result).toEqual(expected);
  });

  it("should return the index of -1 when the number 8 does not exist in this array [3, 12, 5, 3, -1, 17, 15, 26]", () => {
    const arr = [3, 12, 5, 3, -1, 17, 15, 26];
    const target = 8;
    const expected = -1;
    const result = linearSearch(target, arr);
    expect(result).toEqual(expected);
  });
});
