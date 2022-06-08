const isAnagram = (stringA, stringB) => {
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

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i += 1) {
      const letterToCheck = stringA.charAt(i);
      const strAOccurence = countOccurences(stringA, letterToCheck);
      stringAContent.push(strAOccurence);
      const strBOccurence = countOccurences(stringB, letterToCheck);
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
