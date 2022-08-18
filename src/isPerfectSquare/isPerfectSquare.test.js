const { isPerfectSquare } = require("./isPerfectSquare");

describe("isPerfectSquare", () => {
  it("should return true when given the number 9", () => {
    const expected = true;
    const num = 9;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 16", () => {
    const expected = true;
    const num = 16;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 81", () => {
    const expected = true;
    const num = 81;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 1", () => {
    const expected = true;
    const num = 1;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return true when given the number 0", () => {
    const expected = true;
    const num = 0;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 7", () => {
    const expected = false;
    const num = 7;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 15", () => {
    const expected = false;
    const num = 15;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 14", () => {
    const expected = false;
    const num = 14;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number 66", () => {
    const expected = false;
    const num = 66;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
  it("should return false when given the number -9", () => {
    const expected = false;
    const num = -9;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
});
