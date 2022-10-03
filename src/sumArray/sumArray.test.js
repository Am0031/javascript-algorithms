const { sumArray } = require("./sumArray");

describe("sumArray", () => {
  it("should return the number 15 when given the array of numbers [3, 5, 7] ", () => {
    const expected = 15;
    const array = [3, 5, 7];
    const result = sumArray(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 15 when given the array of numbers [15] ", () => {
    const expected = 15;
    const array = [15];
    const result = sumArray(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 0 when given the array of numbers [] ", () => {
    const expected = 0;
    const array = [];
    const result = sumArray(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 15 when given the array of numbers [3, -2, 5, 7] ", () => {
    const expected = 13;
    const array = [3, -2, 5, 7];
    const result = sumArray(array);
    expect(result).toEqual(expected);
  });
  it("should return undefined when given an undefined array ", () => {
    const expected = undefined;
    const array = undefined;
    const result = sumArray(array);
    expect(result).toEqual(expected);
  });
});
