const { bubbleSort } = require("./bubbleSort");

describe("bubbleSort", () => {
  it("should return the array [3, 6, 9, 10, 20] when given the array of numbers [10, 20, 9, 6, 3] ", () => {
    const expected = [3, 6, 9, 10, 20];
    const array = [10, 20, 9, 6, 3];
    const result = bubbleSort(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [-8, -3, 3, 6, 9, 10, 20] when given the array of numbers [-3, 10, -8, 20, 9, 6, 3] ", () => {
    const expected = [-8, -3, 3, 6, 9, 10, 20];
    const array = [-3, 10, -8, 20, 9, 6, 3];
    const result = bubbleSort(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [2] when given the array of one number such as [2] ", () => {
    const expected = [2];
    const array = [2];
    const result = bubbleSort(array);
    expect(result).toEqual(expected);
  });
  it("should return the array [] when given an empty array [] ", () => {
    const expected = [];
    const array = [];
    const result = bubbleSort(array);
    expect(result).toEqual(expected);
  });
  it("should return undefined if the array is undefined ", () => {
    const array = undefined;
    const result = bubbleSort(array);
    expect(result).toBeUndefined();
  });
});
