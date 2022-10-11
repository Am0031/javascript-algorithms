# Is Anagram

In this activity, the challenge is to create a function that takes in two strings and returns `true` if one string is an anagram of another string and otherwise returns `false`.

## Details

The code in the body of the `isAnagram()` function achieves the following:

- Return `true` if one string is an anagram of the other string. Otherwise return `false`.

> **Note:** An **anagram** is a word or phrase made by rearranging the letters of another word or phrase. See the [Wikipedia page on anagrams](https://en.wikipedia.org/wiki/Anagram) for more information.

We assume that the string will contain all lowercase letters.

We will approach this problem by trying to find out if both strings are the same length and contain the same letters.

## Examples

- See the following strings:

```js
const strA = "nnjjdyus";
const strB = "njdnsjyu";
```

- Given the preceding strings, the following should be returned:

```js
const result = true;
```

- See the following strings for an example:

```js
const strA = "tacocat";
const strB = "ctatocato";
```

- Given the preceding strings, the following should be returned:

```js
false;
```
