# Rotation Point

In this activity, the challenge is to create a function that takes in an array of strings. These strings will be in sorted order, but the array might be rotated. The function will return the index of the rotation, or `-1` if there is none.

## Details

We will be writing code in the body of the `rotationPoint` function to achieve the following:

- if the sorted array has been rotated, it returns the index of rotation
- else it returns -1
- the rotation point will be the first word that is less than the previous word alphabetically

See the following array for an example:

```js
const arr = ["column", "car"];
```

Given the preceding array, the following result should be returned:

```js
const result = 1; //because car precedes column in alphabetical order
```

See the following array for an example:

```js
const arr = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
```

Given the preceding array, the following result should be returned:

```js
const result = 4; //because chosen precedes ruby in alphabetical order
```
