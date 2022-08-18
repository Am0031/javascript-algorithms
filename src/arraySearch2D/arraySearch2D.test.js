const { arraySearch2D } = require("./arraySearch2D");

describe("arraySearch2D", () => {
  it("should return the number 3 when given the array [['O', 'O', 'O'], ['X', 'O', 'O'], ['O', 'O', 'X'], ['O', 'O', 'X']] ", () => {
    const expected = 3;
    const array = [
      ["O", "O", "O"],
      ["X", "O", "O"],
      ["O", "O", "X"],
      ["O", "O", "X"],
    ];
    const result = arraySearch2D(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 0 when given the array [['O', 'O', 'O'], ['O', 'O', 'O']] ", () => {
    const expected = 0;
    const array = [
      ["O", "O", "O"],
      ["O", "O", "O"],
    ];
    const result = arraySearch2D(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 5 when given the array [['X', 'O', 'O', 'O'], ['O', 'O', 'O', 'O'], ['X', 'X', 'X', 'X'], ['O', 'O', 'O', 'O']] ", () => {
    const expected = 5;
    const array = [
      ["X", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["X", "X", "X", "X"],
      ["O", "O", "O", "O"],
    ];
    const result = arraySearch2D(array);
    expect(result).toEqual(expected);
  });
  it("should return the number 0 when given the array [[]] ", () => {
    const expected = 0;
    const array = [[]];
    const result = arraySearch2D(array);
    expect(result).toEqual(expected);
  });
});
