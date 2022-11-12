//function that compares two strings to check if they are exactly one edit away from each other

const oneEditAway = (str1, str2) => {
  // If difference in string lengths is greater than 1 OR strings exactly equal, return false
  if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
    return false;
  }
  // Initial index for each string is 0
  let index1 = 0;
  let index2 = 0;
  // Set edit count to zero
  let editCount = 0;

  while (index1 < str1.length && index2 < str2.length) {
    // If characters in string are not a match
    if (str1[index1] !== str2[index2]) {
      // Check edit count. If editCount is already 1, return false (because that would increase editCount to 2)
      if (editCount === 1) {
        return false;
      }
      // If string1 is longer then add a character in index1 / same if string2 is longer
      if (str1.length > str2.length) {
        index1++;
      } else if (str2.length < str1.length) {
        index2++;
        // else strings must be equal length and we increase both indexes
      } else {
        index1++;
        index2++;
      }
      editCount++;
      // If current characters are equal, we move to the next set of characters
    } else {
      index1++;
      index2++;
    }
  }
  //when all characters have been compared and editCount equals 1, return true
  return true;
};

module.exports = { oneEditAway };
