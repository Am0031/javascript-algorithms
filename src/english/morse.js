const isValidMorseCode = (morseCode) => {
  // Check if the Morse code contains consecutive spaces with valid spacing patterns
  if (!/^(?:[.-]|\s{1}|(?:\s{3}|\s{4}|\s{6})+)+$/.test(morseCode)) {
    return false;
  }

  // Check if each character is a dot, dash, or space
  const validCharacters = /^[\s.-]+$/;
  if (!validCharacters.test(morseCode)) {
    return false;
  }

  // Extract the last character and check if it's a dot
  const lastCharacter = morseCode.trim().split(/\s+/).pop();
  if (lastCharacter !== ".-.-.-") {
    return false;
  }

  // Check if the Morse code ends with a space
  if (morseCode.endsWith(" ")) {
    return false;
  }

  return true;
};
const morseCodeTranslator = (morseToEnglish, textToTranslate) => {
  const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
  };

  const englishCode = Object.entries(morseCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

  if (morseToEnglish) {
    const isValid = textToTranslate && isValidMorseCode(textToTranslate);
    if (!isValid) return "Invalid Morse Code Or Spacing";
    const result = textToTranslate
      .split("   ")
      .map((word) =>
        word
          .split(" ")
          .map((letter) => englishCode[letter] || "")
          .join("")
          .toLowerCase()
      )
      .join(" ");
    return result;
  } else {
    const isValid = textToTranslate && textToTranslate.length > 0;
    if (!isValid) return "Invalid String";
    const result = textToTranslate
      .toUpperCase()
      .split(" ")
      .map((word) =>
        word
          .split("")
          .map((letter) => morseCode[letter] || "")
          .join(" ")
      )
      .join("   ");
    return result;
  }
};

module.exports = { morseCodeTranslator };
