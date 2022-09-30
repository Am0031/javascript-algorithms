# Binary Search

In this activity, we will write code to create functions that take a sorted array of numbers and a target number and search the array using a binary search function and return the index of the target number in the given array.

We will write a recursive approach and a iterative approach.

## Instructions

Expected behaviour: return the index of the given `target` number in the given `arr` sorted array.

If the `target` number is not present in the given `arr` array, return `-1`.

The array contains only unique instances.

## Examples

See the following array and target number for an example:

```js
const arr = [1, 8, 21, 22, 82];
const target = 8;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = 1;
```

See the following array and target number for an example:

```js
const arr = [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82];
const target = 8;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = 5;
```

See the following array and target number for an example:

```js
const arr = [-7, -4, 1, 2, 7, 8, 10, 21, 22, 82];
const target = 6;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = -1;
```

See the following array and target number for an example:

```js
const arr = [4];
const target = 4;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = 0;
```

See the following array and target number for an example:

```js
const arr = [4];
const target = 6;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = -1;
```

See the following array and target number for an example:

```js
const arr = [];
const target = 6;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = -1;
```
