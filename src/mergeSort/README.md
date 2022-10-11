# Merge sort

In this activity, the challenge is to create a function that sorts an array using the merge sort method.

## Details

We will be writing code in the body of the `mergeSort` function to achieve the following:

- sort the numbers in the given array in ascending order.
- return the sorted array.

In this process, the merge sort will accomplish the sorting in two steps (illustrated in the image below):

- 1st step (in red): split the array in two arrays, and keep splitting until we have arrays of 1 item only (going down the tree)
- 2nd step (in green): merge two arrays by comparing their elements and ordering them in ascending order (go back up the tree) until we end up with only one sorted array

![merge sort array](mergeSortPic.svg)

## Expected test results

See the following given unsorted array for an example:

```js
const arr = [10, 20, 3, 6, 9];
```

Given the preceding array, the following sorted array should be returned:

```js
const sortedArr = [3, 6, 9, 10, 20];
```

See the following given unsorted array for an example:

```js
const arr = [10];
```

Given the preceding array, the following sorted array should be returned:

```js
const sortedArr = [10];
```

See the following given unsorted array for an example:

```js
const arr = [];
```

Given the preceding array, the following sorted array should be returned:

```js
const sortedArr = [];
```
