//requiring the mostSongs.js function
const { mostSongs } = require("./mostSongs");

describe("mostSongs", () => {
  it("should return 19 when given the array [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2]", () => {
    const expected = 19;
    const array = [
      3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2,
    ];
    const result = mostSongs(array);
    expect(result).toEqual(expected);
  });
  it("should return 18 when given the array [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]", () => {
    const expected = 18;
    const array = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3];
    const result = mostSongs(array);
    expect(result).toEqual(expected);
  });

  it("should return 7 when given the array [3, 4, 2, 1, 7, 5, 3]", () => {
    const expected = 7;
    const array = [3, 4, 2, 1, 7, 5, 3];
    const result = mostSongs(array);
    expect(result).toEqual(expected);
  });
  it("should return 4 when given the array [3, 4, 7, 2]", () => {
    const expected = 4;
    const array = [3, 4, 7, 2];
    const result = mostSongs(array);
    expect(result).toEqual(expected);
  });

  it("should return 0 when given the array []", () => {
    const expected = 0;
    const array = [];
    const result = mostSongs(array);
    expect(result).toEqual(expected);
  });
});
