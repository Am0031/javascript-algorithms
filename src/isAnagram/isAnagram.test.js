const { isAnagram } = require("./isAnagram");

describe("isAnagram", () => {
  it("should return 'true' when two strings are anagrams, like 'particular' and 'parritaluc'", () => {
    const stringA = "particular";
    const stringB = "parritaluc";
    const actual = isAnagram(stringA, stringB);
    expect(actual).toEqual(true);
  });

  it("should return 'false' when two strings are not anagrams, like 'particular' and 'parritaltnuc'", () => {
    const stringA = "particular";
    const stringB = "parritaltnuc";
    const actual = isAnagram(stringA, stringB);
    expect(actual).toEqual(false);
  });

  it("should return 'false' when two strings are not anagrams, like 'particular' and an empty string", () => {
    const stringA = "particular";
    const stringB = "";
    const actual = isAnagram(stringA, stringB);
    expect(actual).toEqual(false);
  });

  it("should return 'false' when the two strings are empty strings", () => {
    const stringA = "";
    const stringB = "";
    const actual = isAnagram(stringA, stringB);
    expect(actual).toEqual(false);
  });
});
