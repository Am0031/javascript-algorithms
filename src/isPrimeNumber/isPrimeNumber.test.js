const { isPrimeNumber } = require("./isPrimeNumber");

describe("isPrimeNumber", () => {
  it("should return true when given the number 11", () => {
    const expected = true;
    const num = 11;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 29", () => {
    const expected = true;
    const num = 29;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 43", () => {
    const expected = true;
    const num = 43;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 8", () => {
    const expected = false;
    const num = 8;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 50", () => {
    const expected = false;
    const num = 50;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 74", () => {
    const expected = false;
    const num = 74;
    const result = isPrimeNumber(num);
    expect(result).toEqual(expected);
  });
});
