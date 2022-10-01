# Merge sort

In this activity we will be writing code to create two functions that sort an array using the heap sort method, one sorting it in ascending order and one sorting it in descending order.

## Details

We will be writing code for the `heapSort` function to achieve the following:

- sort the numbers in the given array in the chosen order.
- return the sorted array.

`heapSort` will be passed an array and a chosen sorting order, and it will sort items accordingly.

In this process, the heap sort process will involve:

- A class: the constructor method creates the heap, and the methods set in this class help achieve the sorting of the array by looking into the heap indexes and operating the relevant insert, delete and swap operations to the heap.
  - the `MaxHeap` class deals with a heap set in descending order (largest item at the top)
  - the `MinHeap` class deals with a heap set in ascending order (smallest item at the top)
  - Both classes are descendants of the `Heap` class which sets the basic features of a heap.
- A function: the function receives an array, creates the chosen heap type using this array, and retrieves items from the heap to place them in an array in the chosen order

## Expected test results

### Testing function `heapSort` for descending order

See the following given unsorted array for an example:

```js
const arr = [10, 20, 3, 6, 9];
```

Given the preceding array, the following sorted array should be returned:

```js
const sortedArr = [20, 10, 9, 6, 3];
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

### Testing function `heapSort` for ascending order

See the following given unsorted array for an example:

```js
const arr = [10, 20, 3, 6, 9];
```

Given the preceding array, the following sorted array should be returned:

```js
const sortedArr = [3, 6, 9, 10, 20];
```

The tests for an array of 1 item and an empty array should return the same result as the ones shown for descending order tests.
