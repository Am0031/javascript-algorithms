const { mostFrequent } = require("./mostFrequent");

describe("mostFrequent", () => {
  it("should return the number 5 when given the array of numbers [-4, 1, 5, -16, 3, -42, 0, 5, 5] ", () => {
    const expected = { key: 5, value: 3 };
    const array = [-4, 1, 5, -16, 3, -42, 0, 5, 5];
    const result = mostFrequent(array);
    expect(result).toEqual(expected);
  });
});
