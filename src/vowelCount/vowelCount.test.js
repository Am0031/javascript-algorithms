const { vowelCount } = require("./vowelCount");

describe("vowelCount", () => {
  it("should return the number 5 when given the string 'I am new here' ", () => {
    const expected = 5;
    const str = "I am new here";
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
  it("should return the number 5 when given the string '~I am -new here!' ", () => {
    const expected = 5;
    const str = "~I am -new here!";
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
  it("should return the number 0 when given the string 'kdjfh dkjfg dkfjg' ", () => {
    const expected = 0;
    const str = "kdjfh dkjfg dkfjg";
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
  it("should return 0 when given an empty string ", () => {
    const expected = 0;
    const str = "";
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
  it("should return -1 when given undefined ", () => {
    const expected = -1;
    const str = undefined;
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
  it("should return -1 when given another type ", () => {
    const expected = -1;
    const str = 5;
    const result = vowelCount(str);
    expect(result).toEqual(expected);
  });
});
