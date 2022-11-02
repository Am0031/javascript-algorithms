const { rotationPoint } = require("./rotationPoint");

describe("rotationPoint", () => {
  it("should return the number 1 when given the array ['column', 'car'] ", () => {
    const expected = 1;
    const array = ["column", "car"];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 4 when given the array ['great', 'ostrich', 'panther', 'ruby', 'chosen', 'feathers'] ", () => {
    const expected = 4;
    const array = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 5 when given the array ['problem', 'reactive', 'supper', 'undesirable', 'xebra', 'alpha', 'bank', 'banned', 'endanger','fallout', 'yellow'] ", () => {
    const expected = 5;
    const array = [
      "problem",
      "reactive",
      "supper",
      "undesirable",
      "xebra",
      "alpha",
      "bank",
      "banned",
      "endanger",
      "fallout",
      "yellow",
    ];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number -1 when given the array ['any', 'body', 'can', 'dance', 'to', 'violas'] ", () => {
    const expected = -1;
    const array = ["any", "body", "can", "dance", "to", "violas"];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number -1 when given an empty array ", () => {
    const expected = -1;
    const array = [];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number -1 when given the array ['cool']", () => {
    const expected = -1;
    const array = ["cool"];
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
  it("should return the number -1 when given an undefined array ", () => {
    const expected = -1;
    const array = undefined;
    const result = rotationPoint(array);
    expect(result).toEqual(expected);
  });
});
