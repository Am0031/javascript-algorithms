const { endsWith, endsWith2 } = require("./endsWith");

describe("endsWith", () => {
  it("should return true when given the string 'Open sesame' and the target 'same' ", () => {
    const string = "Open sesame";
    const target = "same";
    const result = endsWith(string, target);
    expect(result).toBe(true);
  });

  it("should return true when given the string 'Open sesame' and the target 'same' ", () => {
    const string = "Open sesame";
    const target = "Same";
    const result = endsWith(string, target);
    expect(result).toBe(true);
  });
  it("should return false when given the string 'racing cars' and the target 'car'", () => {
    const string = "racing cars";
    const target = "car";
    const result = endsWith(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given a target longer than the string", () => {
    const string = "cars";
    const target = "fastcar";
    const result = endsWith(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given an undefined string", () => {
    const string = undefined;
    const target = "car";
    const result = endsWith(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given an undefined target", () => {
    const string = "racing cars";
    const target = undefined;
    const result = endsWith(string, target);
    expect(result).toBe(false);
  });
});

describe("endsWith2", () => {
  it("should return true when given the string 'Open sesame' and the target 'same' ", () => {
    const string = "Open sesame";
    const target = "same";
    const result = endsWith2(string, target);
    expect(result).toBe(true);
  });
  it("should return true when given the string 'Open sesame' and the target 'same' ", () => {
    const string = "Open sesame";
    const target = "Same";
    const result = endsWith2(string, target);
    expect(result).toBe(true);
  });

  it("should return false when given the string 'racing cars' and the target 'car'", () => {
    const string = "racing cars";
    const target = "car";
    const result = endsWith2(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given a target longer than the string", () => {
    const string = "cars";
    const target = "fastcar";
    const result = endsWith2(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given an undefined string", () => {
    const string = undefined;
    const target = "car";
    const result = endsWith2(string, target);
    expect(result).toBe(false);
  });
  it("should return false when given an undefined target", () => {
    const string = "racing cars";
    const target = undefined;
    const result = endsWith2(string, target);
    expect(result).toBe(false);
  });
});
