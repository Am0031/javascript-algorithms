const { roman } = require("./roman");

describe("roman", () => {
  it("should return the number 5 when given the roman number 'V' ", () => {
    const expected = 5;
    const string = "V";
    const result = roman(string);
    expect(result).toEqual(expected);
  });
  it("should return the number 9 when given the roman number 'IX' ", () => {
    const expected = 9;
    const string = "IX";
    const result = roman(string);
    expect(result).toEqual(expected);
  });
  it("should return the number 2024 when given the roman number 'MMXXIV' ", () => {
    const expected = 2024;
    const string = "MMXXIV";
    const result = roman(string);
    expect(result).toEqual(expected);
  });
});
