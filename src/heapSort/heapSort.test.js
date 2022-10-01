const { heapSort } = require("./heapSort");

describe("heapSort-Edge cases", () => {
  it("should return the array [2] when given the array of one number such as [2] ", () => {
    const expected = [2];
    const array = [2];
    const result = heapSort(array, true);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an empty array [] ", () => {
    const expected = [];
    const array = [];
    const result = heapSort(array, true);
    expect(result).toEqual(expected);
  });
  it("should return undefined if the array is undefined ", () => {
    const array = undefined;
    const result = heapSort(array, true);
    expect(result).toBeUndefined();
  });
  it("should return the array [2] when given the array of one number such as [2] ", () => {
    const expected = [2];
    const array = [2];
    const result = heapSort(array, false);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an empty array [] ", () => {
    const expected = [];
    const array = [];
    const result = heapSort(array, false);
    expect(result).toEqual(expected);
  });
  it("should return undefined if the array is undefined ", () => {
    const array = undefined;
    const result = heapSort(array, false);
    expect(result).toBeUndefined();
  });
});

describe("heapSort-Descending", () => {
  const isDescending = true;
  it("should return the array [31, 20, 15, 10, 9, 6, 3] when given the array of numbers [10, 20, 9, 6, 31, 3] ", () => {
    const expected = [31, 20, 15, 10, 9, 6, 3];
    const array = [10, 20, 9, 6, 31, 3, 15];
    const result = heapSort(array, isDescending);
    expect(result).toEqual(expected);
  });
  it("should return the array [20, 10, 9, 6, -3, -8] when given the array of numbers [-3, 10, -8, 20, 9, 6] ", () => {
    const expected = [20, 10, 9, 6, -3, -8];
    const array = [-3, 10, -8, 20, 9, 6];
    const result = heapSort(array, isDescending);
    expect(result).toEqual(expected);
  });
});

describe("heapSort-Ascending", () => {
  const isDescending = false;
  it("should return the array [3, 6, 9, 10, 15, 20, 31] when given the array of numbers [10, 20, 9, 6, 31, 3] ", () => {
    const expected = [3, 6, 9, 10, 15, 20, 31];
    const array = [10, 20, 9, 6, 31, 3, 15];
    const result = heapSort(array, isDescending);
    expect(result).toEqual(expected);
  });
  it("should return the array [-8, -3, 6, 9, 10, 20] when given the array of numbers [-3, 10, -8, 20, 9, 6] ", () => {
    const expected = [-8, -3, 6, 9, 10, 20];
    const array = [-3, 10, -8, 20, 9, 6];
    const result = heapSort(array, isDescending);
    expect(result).toEqual(expected);
  });
});
