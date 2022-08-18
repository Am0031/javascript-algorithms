const { isPerfectSquare } = require("./isPerfectSquare");

describe("isPerfectSquare", () => {
  it("should return true when given the number 9", () => {
    const expected = true;
    const num = 9;
    const result = isPerfectSquare(num);
    expect(result).toEqual(expected);
  });
});
//should return true when given the number 9
//should return true when given the number 16
//should return true when given the number 81
//should return true when given the number 1
//should return true when given the number 0
//should return false when given the number 7
//should return false when given the number 15
//should return false when given the number 14
//should return false when given the number -9
//should return false when given the number 66
