const { camelCase } = require("./camelCase");

describe("camelCase", () => {
  it("should return the string 'helloWorld' when given the string 'Hello World' ", () => {
    const expected = "helloWorld";
    const string = "Hello World";
    const result = camelCase(string);
    expect(result).toMatch(expected);
  });

  it("should return the string 'theRainInSpainFallsMainlyOnThePlain' when given the string 'The rain in spain falls mainly on the plain' ", () => {
    const expected = "theRainInSpainFallsMainlyOnThePlain";
    const string = "The rain in spain falls mainly on the plain";
    const result = camelCase(string);
    expect(result).toEqual(expected);
  });
  it("should return a camelCase string", () => {
    const expected = "theShowMustGoOn";
    const string = "The show must go on";
    const result = camelCase(string);
    expect(result).toMatch(expected);
  });
});
