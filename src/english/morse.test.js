const { morseCodeTranslator } = require("./morse");

describe("morse", () => {
  it("should translate morse code", () => {
    const bool = true;
    const str = ".-- .. --.. .- .-. -..";
    const expected = "Invalid Morse Code Or Spacing";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should ", () => {
    const bool = false;
    const str = "";
    const expected = "Invalid String";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should ", () => {
    const bool = false;
    const str = "The wizard quickly jinxed the gnomes before they vaporized.";
    const expected =
      "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
  it("should ", () => {
    const bool = true;
    const str =
      "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
    const expected =
      "the wizard quickly jinxed the gnomes before they vaporized.";
    const result = morseCodeTranslator(bool, str);
    expect(result).toMatch(expected);
  });
});
