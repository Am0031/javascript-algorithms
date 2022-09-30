# Merge sort

In this activity we will be writing code to create a function that sorts an array using the merge sort method.

## Details

We will be writing code in the body of the `mergeSort` function to achieve the following:

- sort the numbers in the given array in ascending order.
- return the sorted array.

In this process, the merge sort will accomplish this sorting in two steps:

- 1st step: split the array until we have arrays of 1 item only (going down the tree)
- 2nd step: merge two arrays by comparing their elements and ordering them in ascending order (go back up the tree) until we end up with only one sorted array

See the following array for an example:

```js
const arr = [10, 20, 3, 6, 9];
```

Given the preceding array, the following array should be returned:

```js
const sortedArr = [3, 6, 9, 10, 20];
```
