# Caesar Cipher

In this activity, the challenge is to create a function that takes in a string and an offset integer. Your function should return a new string with characters shifted up by the offset. I

This [Wikipedia page on Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher) explains the concept.

## Details

We will be writing code in the body of the `caesarCipher` function to achieve the following:

- Return a new string with characters shifted up in the alphabet by the given offset.
- The characters in the new string should maintain the same casing as the original.
- We assume the provided string will only contain alphabetical characters and spaces.

See the following inputs for an example:

```js
const str = "Hello World";
const offset = 1;
```

Given the preceding inputs, the following result should be returned:

```js
const result = "Ifmmp Xpsme";
```

See the following inputs for an example:

```js
const str = "Ifmmp Xpsme";
const offset = -1;
```

Given the preceding inputs, the following result should be returned:

```js
const result = "Hello World";
```

See the following inputs for an example:

```js
const str = "Goodbye";
const offset = 28;
```

Given the preceding inputs, the following result should be returned:

```js
const result = "Iqqfdag";
```
