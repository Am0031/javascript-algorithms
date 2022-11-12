const { caesarCipher } = require("./caesarCipher");

describe("caesarCipher", () => {
  it("should return the string 'Ifmmp Xpsme' when given the string 'Hello World' and the offset 1 ", () => {
    const expected = "Ifmmp Xpsme";
    const string = "Hello World";
    const offset = 1;
    const result = caesarCipher(string, offset);
    expect(result).toEqual(expected);
  });
  it("should return the string 'Hello World' when given the string 'Ifmmp Xpsme' and the offset 1 ", () => {
    const expected = "Hello World";
    const string = "Ifmmp Xpsme";
    const offset = -1;
    const result = caesarCipher(string, offset);
    expect(result).toEqual(expected);
  });
  it("should return the string 'Goodbye' when given the string 'Iqqfdag' and the offset 1 ", () => {
    const expected = "Iqqfdag";
    const string = "Goodbye";
    const offset = 28;
    const result = caesarCipher(string, offset);
    expect(result).toEqual(expected);
  });
});
