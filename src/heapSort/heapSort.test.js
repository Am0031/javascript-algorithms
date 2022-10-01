const { heapSortMax, heapSortMin } = require("./heapSort");

describe("heapSortMax", () => {
  it("should return the array [31, 20, 15, 10, 9, 6, 3] when given the array of numbers [10, 20, 9, 6, 31, 3] ", () => {
    const expected = [31, 20, 15, 10, 9, 6, 3];
    const array = [10, 20, 9, 6, 31, 3, 15];
    const result = heapSortMax(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [20, 10, 9, 6, -3, -8] when given the array of numbers [-3, 10, -8, 20, 9, 6] ", () => {
    const expected = [20, 10, 9, 6, -3, -8];
    const array = [-3, 10, -8, 20, 9, 6];
    const result = heapSortMax(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [2] when given the array of one number such as [2] ", () => {
    const expected = [2];
    const array = [2];
    const result = heapSortMax(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an empty array [] ", () => {
    const expected = [];
    const array = [];
    const result = heapSortMax(array);
    expect(result).toEqual(expected);
  });
  it("should return undefined if the array is undefined ", () => {
    const array = undefined;
    const result = heapSortMax(array);
    expect(result).toBeUndefined();
  });
});

describe("heapSortMin", () => {
  it("should return the array [3, 6, 9, 10, 15, 20, 31] when given the array of numbers [10, 20, 9, 6, 31, 3] ", () => {
    const expected = [3, 6, 9, 10, 15, 20, 31];
    const array = [10, 20, 9, 6, 31, 3, 15];
    const result = heapSortMin(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [-8, -3, 6, 9, 10, 20] when given the array of numbers [-3, 10, -8, 20, 9, 6] ", () => {
    const expected = [-8, -3, 6, 9, 10, 20];
    const array = [-3, 10, -8, 20, 9, 6];
    const result = heapSortMin(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [2] when given the array of one number such as [2] ", () => {
    const expected = [2];
    const array = [2];
    const result = heapSortMin(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an empty array [] ", () => {
    const expected = [];
    const array = [];
    const result = heapSortMin(array);
    expect(result).toEqual(expected);
  });
  it("should return undefined if the array is undefined ", () => {
    const array = undefined;
    const result = heapSortMin(array);
    expect(result).toBeUndefined();
  });
});
