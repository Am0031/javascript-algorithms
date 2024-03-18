const { morseCodeTranslator } = require("./morse");

describe("morse", () => {
  it("should return 'Invalid Morse Code' message when given an invalid morse code string", () => {
    const bool = true;
    const str = ".-- .. --.. .- .-. -..";
    const expected = "Invalid Morse Code Or Spacing";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should return 'Invalid String' when given an empty string", () => {
    const bool = false;
    const str = "";
    const expected = "Invalid String";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should return the morse code equivalent of the given english string ", () => {
    const bool = false;
    const str = "The wizard quickly jinxed the gnomes before they vaporized.";
    const expected =
      "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should return the english equivalent of the morse code string", () => {
    const bool = true;
    const str =
      "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
    const expected =
      "the wizard quickly jinxed the gnomes before they vaporized.";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
});
