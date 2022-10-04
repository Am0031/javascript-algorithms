const { isPalindrome } = require("./isPalindrome");

describe("isPalindrome", () => {
  it("should return true when given the string 'racecar' ", () => {
    const string = "racecar";
    const result = isPalindrome(string);
    expect(result).toBeTruthy;
  });

  it("should return true when given the string 'noon' ", () => {
    const string = "noon";
    const result = isPalindrome(string);
    expect(result).toBeTruthy;
  });
  it("should return false when given the string 'racingcar", () => {
    const string = "racingcar";
    const result = isPalindrome(string);
    expect(result).toBeFalsy;
  });
  it("should return false when given an empty string", () => {
    const string = "";
    const result = isPalindrome(string);
    expect(result).toBeFalsy;
  });
});
