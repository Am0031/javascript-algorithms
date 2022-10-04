const { isPalindrome, isPalindrome2 } = require("./isPalindrome");

describe("isPalindrome", () => {
  it("should return true when given the string 'racecar' ", () => {
    const string = "racecar";
    const result = isPalindrome(string);
    expect(result).toBe(true);
  });
  it("should return true when given the string 'race car' ", () => {
    const string = "race car";
    const result = isPalindrome(string);
    expect(result).toBe(true);
  });
  it("should return true when given the string 'A man, a plan, a canal. Panama' ", () => {
    const string = "A man, a plan, a canal. Panama";
    const result = isPalindrome(string);
    expect(result).toBe(true);
  });

  it("should return true when given the string 'noon' ", () => {
    const string = "noon";
    const result = isPalindrome(string);
    expect(result).toBe(true);
  });
  it("should return false when given the string 'racing car", () => {
    const string = "racing car";
    const result = isPalindrome(string);
    expect(result).toBe(false);
  });
  it("should return false when given the string '1 eye for of 1 eye.'", () => {
    const string = "1 eye for of 1 eye.";
    const result = isPalindrome(string);
    expect(result).toBe(false);
  });
  it("should return false when given an empty string", () => {
    const string = "";
    const result = isPalindrome(string);
    expect(result).toBe(false);
  });
});

describe("isPalindrome2", () => {
  it("should return true when given the string 'racecar' ", () => {
    const string = "racecar";
    const result = isPalindrome2(string);
    expect(result).toBe(true);
  });
  it("should return true when given the string 'race car' ", () => {
    const string = "race car";
    const result = isPalindrome2(string);
    expect(result).toBe(true);
  });
  it("should return true when given the string 'A man, a plan, a canal. Panama' ", () => {
    const string = "A man, a plan, a canal. Panama";
    const result = isPalindrome2(string);
    expect(result).toBe(true);
  });

  it("should return true when given the string 'noon' ", () => {
    const string = "noon";
    const result = isPalindrome2(string);
    expect(result).toBe(true);
  });
  it("should return false when given the string 'racing car", () => {
    const string = "racing car";
    const result = isPalindrome2(string);
    expect(result).toBe(false);
  });
  it("should return false when given the string '1 eye for of 1 eye.'", () => {
    const string = "1 eye for of 1 eye.";
    const result = isPalindrome2(string);
    expect(result).toBe(false);
  });
  it("should return false when given an empty string", () => {
    const string = "";
    const result = isPalindrome2(string);
    expect(result).toBe(false);
  });
});
