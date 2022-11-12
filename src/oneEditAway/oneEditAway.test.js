const { oneEditAway } = require("./oneEditAway");

describe("oneEditAway", () => {
  it("should return true when given the strings 'Hello' and 'Hexlo' ", () => {
    const str1 = "Hello";
    const str2 = "Hexlo";
    const result = oneEditAway(str1, str2);
    expect(result).toBe(true);
  });
  it("should return true when given the strings 'wo' and 'wow' ", () => {
    const str1 = "wo";
    const str2 = "wow";
    const result = oneEditAway(str1, str2);
    expect(result).toBe(true);
  });
  it("should return false when given the strings 'Hello' and 'Hexxo' ", () => {
    const str1 = "Hello";
    const str2 = "Hexxo";
    const result = oneEditAway(str1, str2);
    expect(result).toBe(false);
  });
  it("should return false when given the strings 'Hello' and 'Hello' ", () => {
    const str1 = "Hello";
    const str2 = "Hello";
    const result = oneEditAway(str1, str2);
    expect(result).toBe(false);
  });
});
