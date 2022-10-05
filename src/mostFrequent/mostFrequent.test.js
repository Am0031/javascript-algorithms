const { mostFrequent } = require("./mostFrequent");

describe("mostFrequent", () => {
  it("should return the number 5 when given the array of numbers [-4, 1, 5, -16, 3, -42, 0, 5, 5] ", () => {
    const expected = { key: 5, value: 3 };
    const array = [-4, 1, 5, -16, 3, -42, 0, 5, 5];
    const result = mostFrequent(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 966 when given the array of numbers [4, 8, 15, 16, 23, 42] ", () => {
    const expected = 42;
    const array = [4, 8, 15, 16, 23, 42];
    const result = mostFrequent(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 966 when given the array of numbers [-10, -5, -2, -15, -1, -33, -88, -100] ", () => {
    const expected = -1;
    const array = [-10, -5, -2, -15, -1, -33, -88, -100];
    const result = mostFrequent(array);
    expect(result).toEqual(expected);
  });
});
