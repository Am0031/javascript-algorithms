const isAnagram = (stringA, stringB) => {
  const strA = stringA.replace(/\s/g, "");
  const strB = stringB.replace(/\s/g, "");

  const countOccurences = (string, letter) => {
    const occurences = string.split("").filter(function (char, i) {
      if (char == letter) {
        return i;
      }
    }).length;

    return occurences;
  };

  const stringAContent = [];
  const stringBContent = [];
  let identicalOccurences;

  if (strA.length === strB.length) {
    for (let i = 0; i < strA.length; i += 1) {
      const letterToCheck = strA.charAt(i);
      const strAOccurence = countOccurences(strA, letterToCheck);
      stringAContent.push(strAOccurence);
      const strBOccurence = countOccurences(strB, letterToCheck);
      stringBContent.push(strBOccurence);
    }

    for (let i = 0; i < stringAContent.length; i += 1) {
      identicalOccurences = stringAContent[i] === stringBContent[i];
      if (!identicalOccurences) {
        break;
      }
    }
  }

  return identicalOccurences ? true : false;
};
module.exports = { isAnagram };
