const { maxSubarray } = require("./maxSubarray");

describe("maxSubarray", () => {
  it("should return 84 when given the array [10,14,52,-2,10,-22,-40,-3,11] ", () => {
    const arr = [10, 14, 52, -2, 10, -22, -40, -3, 11];
    const expected = 84;
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
  it("should return 36 when given the array [-2, 1, 2, -4, 13, 23]", () => {
    const arr = [-2, 1, 2, -4, 13, 23];
    const expected = 36;
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });

  it("should return -2 when given the array [-2,-10,-4]", () => {
    const arr = [-2, -10, -4];
    const expected = -2;
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
  it("should return 4 when given the array [1,1,1,-1,1,1]", () => {
    const arr = [1, 1, 1, -1, 1, 1];
    const expected = 4;
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
  it("should return an error message when an array item is above 10^3", function () {
    const arr = [10, 14, 52, -2, 10000, -22, -40, -3, 11];
    const expected = "Array elements must be within the range -10^3 to 10^3.";
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
  it("should return an error message when array is empty", function () {
    const arr = [];
    const expected = "Input array doesn't contain any elements.";
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
  it("should return -2 when given the array [-2, -10, -36]", function () {
    const arr = [-2, -10, -36];
    const expected = -2;
    const result = maxSubarray(arr);
    expect(result).toEqual(expected);
  });
});
