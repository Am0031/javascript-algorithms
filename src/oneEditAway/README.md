# One Edit Away

In this activity, the challenge is to create a function that takes in two strings and returns true if they are exactly one character edit away from each other, else return false.

## Details

We will be writing code in the body of the `oneEditAway` function to achieve the following: return `true` if the strings are one character edit away from each other, else return `false`.

- See the following strings for an example:

  ```js
  const str1 = "Hello";
  const str2 = "Hexlo";
  ```

- Given the preceding strings, the following should be returned:

  ```js
  const result = true;
  ```

- See the following strings for an example:

  ```js
  const str1 = "wo";
  const str2 = "wow";
  ```

- Given the preceding strings, the following should be returned:

  ```js
  const result = true;
  ```

- See the following strings for an example:

  ```js
  const str1 = "Hello";
  const str2 = "Hexxo";
  ```

- Given the preceding strings, the following should be returned:

  ```js
  const result = false;
  ```

- See the following strings for an example:

  ```js
  const str1 = "wow";
  const str2 = "wow";
  ```

- Given the preceding strings, the following should be returned:

  ```js
  const result = false; //Because the strings are the same, they are no edits away. We only return `true` if the strings are _exactly_ one edit away.
  ```
