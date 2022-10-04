const { titleCase } = require("./titleCase");

describe("titleCase", () => {
  it("should return the string 'Hello World' when given the string 'hello world' ", () => {
    const expected = "Hello World";
    const string = "hello world";
    const result = titleCase(string);
    expect(result).toMatch(expected);
  });

  it("should return the string 'The Rain In Spain Falls Mainly On The Plain' when given the string 'The rain in spain falls mainly on the plain' ", () => {
    const expected = "The Rain In Spain Falls Mainly On The Plain";
    const string = "The rain in Spain falls mainly on the plain";
    const result = titleCase(string);
    expect(result).toEqual(expected);
  });
  it("should return the string 'I Have 5 Brothers' when given the string 'I have 5 brothers'", () => {
    const expected = "I Have 5 Brothers";
    const string = "I have 5 brothers";
    const result = titleCase(string);
    expect(result).toMatch(expected);
  });
  it("should return an empty string when given an empty string", () => {
    const expected = "";
    const string = "";
    const result = titleCase(string);
    expect(result).toMatch(expected);
  });
  it("should return an empty string when given an input which is not a string", () => {
    const expected = "";
    const input = 5;
    const result = titleCase(input);
    expect(result).toMatch(expected);
  });
});
