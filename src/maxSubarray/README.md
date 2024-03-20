# Maximum subarray

This challenge is to find the maximum sum of a contiguous subarray.

## What is the Maximum Subarray Problem?

The Maximum Subarray Problem is a task of finding the contiguous subarray within a one-dimensional array of numbers (containing at least one number) which has the largest sum.

A contiguous subarray is simply a subarray of an array with a condition that the elements of the subarray should be in exact sequence as the sequence of the elements in the array.
For example if the array is [1,2,3,4,5] then [1,3,5] is a subarray of the array, but not a contiguous subarray since the sequence does not match the original array, as the elements 2 and 4 are skipped. [1,2,3] will be one of the contiguous subarrays.

## Details and constraints

For an array with n elements, a = (a1, a2, a3, … , an), we want to find the maximum possible sum of a contiguous subarray. If the maximum element is bigger than the sum, return that element.

The input is an array of numbers. For example: [-2,1,-3,4,-1,2,1,-5,4]

The output is a number representing the maximum sum. For example: 6.

The constraints are:

- the length of the array must be between 1 and 10^6
- each item in the array must be between -10^3 and 10^3

## Examples

See the following array for an example:

```js
const arr = [10, 14, 52, -2, 10, -22, -40, -3, 11];
```

Given the preceding array, the following should be returned:

```js
const result = 84; //(10 + 14 + 52 + -2 + 10)  -->  this is the subarray with the highest sum value. The total for the full array is only 30.
```

See the following array for an example:

```js
const arr = [-2, 1, 2, -4, 13, 23];
```

Given the preceding array, the following should be returned:

```js
const result = 36; // (13 + 23)  -->  this is the subarray with the highest sum value. Sum of the full array is only 33
```

See the following array for an example:

```js
const arr = [-2, -10, -4];
```

Given the preceding array, the following should be returned:

```js
const result = -2; // -2 is the highest element and no other subarray provides a higher number
```

See the following array for an example:

```js
const arr = [1, 1, 1, -1, 1, 1];
```

Given the preceding array, the following should be returned:

```js
const result = 4; // (1 + 1 + 1 + -1 + 1 + 1) --> the sum of the full array is the highest number
```

See the following array for an example:

```js
const arr = [];
```

Given the preceding array, the following should be returned:

```js
const result = "Input array doesn't contain any elements.";
```
