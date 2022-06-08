const { oddOrEven } = require("./oddOrEven");

describe("oddOrEven", () => {
  it("should return a string 'even' for the number 30", () => {
    const expected = "even";
    const actual = oddOrEven(30);
    expect(actual).toEqual(expected);
  });

  it("should return a string 'odd' for the number 17", () => {
    const expected = "odd";
    const actual = oddOrEven(17);
    expect(actual).toEqual(expected);
  });

  it("should return a string 'even' for the number 0", () => {
    const expected = "even";
    const actual = oddOrEven(0);
    expect(actual).toEqual(expected);
  });
});
