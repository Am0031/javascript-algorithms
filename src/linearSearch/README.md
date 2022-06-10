# Linear Search

In this activity, we will write code to create a function that takes an array of numbers and a target number and returns the index of the target number in the given array.

## Instructions

Expected behaviour: return the index of the given `target` number in the given `arr` array.

If the `target` number is not present in the given `arr` array, return `-1`.

If the array contains multiple instances of the target number, return the index for the first instance.

## Examples

See the following array and target number for an example:

```js
const arr = [82, 22, -4, 21, 1, 8];
const target = 8;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = 5;
```

See the following array and target number for an example:

```js
const arr = [82, 22, 8, -4, 21, 1, 8, 10, -7, 8];
const target = 8;
```

Given the preceding array and target number, the following number should be returned:

```js
const result = 2;
```

Important:\*\* You may not use the built-in `indexOf()`, `lastIndexOf()`, or `includes()` methods for this problem.
