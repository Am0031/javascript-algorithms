# Unique items

In this activity, the challenge is to create a function that takes an array of items and returns the unique items. This could be understood in 2 different ways:

- 1st challenge: it filters out duplicates and return each item only once, so the result is an array of unique items, or
- 2nd challenge: it checks the array to separate which items are already unique within the array and which items have duplicates, and it returns only the unique ones
  In all cases, the return value is an array.

## 1st challenge - Examples

See the following array for an example:

```js
const arr = [2, 8, 2, 7, 5, 4, 19, 4, 5, 8];
```

Given the preceding array, the following should be returned:

```js
const result1stChallenge = [2, 8, 7, 5, 4, 19];
```

See the following array for an example:

```js
const arr = [2, 8, 2, 5, 4, 4, 5, 8];
```

Given the preceding array, the following should be returned:

```js
const result1stChallenge = [2, 8, 5, 4];
```

See the following array for an example:

```js
const arr = []; // no numbers - array is empty
```

Given the preceding array, the following should be returned:

```js
const result1stChallenge = [];
```

## 2nd challenge - Examples

See the following array for an example:

```js
const arr = [2, 8, 2, 7, 5, 4, 19, 4, 5, 8]; // numbers 7 and 19 only appear once
```

Given the preceding array, the following should be returned:

```js
const result2ndChallenge = [7, 19];
```

See the following array for an example:

```js
const arr = [2, 8, 2, 5, 4, 4, 5, 8]; // no number is unique
```

Given the preceding array, the following should be returned:

```js
const result2ndChallenge = [];
```

See the following array for an example:

```js
const arr = []; // no number is unique - array is empty
```

Given the preceding array, the following should be returned:

```js
const result2ndChallenge = [];
```
