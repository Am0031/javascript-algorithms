const { characterCount } = require("./characterCount");

describe("characterCount", () => {
  it("should return the object { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 } when given the string 'Hello World!' ", () => {
    const expected = {
      H: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      W: 1,
      r: 1,
      d: 1,
      "!": 1,
    };
    const string = "Hello World!";
    const result = characterCount(string);
    expect(result).toEqual(expected);
  });
  it("should return the object below when given the string below ", () => {
    const expected = {
      s: 8,
      h: 4,
      e: 7,
      " ": 7,
      l: 4,
      a: 2,
      b: 1,
      y: 1,
      t: 1,
      o: 1,
      r: 1,
    };
    const string = "she sells sea shells by the sea shore";
    const result = characterCount(string);
    expect(result).toEqual(expected);
  });
  it("should return the object below when given the string below ", () => {
    const expected = {
      p: 9,
      e: 7,
      t: 1,
      r: 3,
      " ": 7,
      i: 3,
      c: 3,
      k: 3,
      d: 2,
      a: 2,
      o: 1,
      f: 1,
      l: 1,
      s: 1,
    };
    const string = "peter piper picked a pack of pickled peppers";
    const result = characterCount(string);
    expect(result).toEqual(expected);
  });
});
