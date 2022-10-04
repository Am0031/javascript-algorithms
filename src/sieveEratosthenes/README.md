# Sieve of Eratosthenes

In this activity we will be writing code to create a function that returns the prime numbers in a range of numbers using the **Sieve of Eratosthenes** method.

## The Sieve of Eratosthenes concept

The sieve works by first assuming that all numbers from {2,…,n} are prime, and then successively marking them as NOT prime.

The algorithm works as follows:

- Create a list of all integers from 2 to n.
- Start with the smallest number in the list (2, the smallest prime number).
- Mark all multiples of that number up to n as not prime.
- Move to the next non-marked number and repeat this process until the entire list has been covered.
- When the steps are complete, all remaining non-marked numbers are prime.

Example
If we want to find all prime numbers less than or equal to 10, we would:

- Start with a list where all are assumed to be prime: {2, 3, 4, 5, 6, 7, 8, 9}
- Starting with 2, we mark all multiple up to 10 as NOT prime (marked as striked): {**2**, 3, ~~4~~, 5, ~~6~~, 7, ~~8~~, 9, ~~10~~}

- Move to the next non-marked number, 3, and mark its multiples as NOT prime. 6 is already marked: {**2**, **3**, ~~4~~, 5, ~~6~~, 7, ~~8~~, ~~9~~, ~~10~~}

- Continue marking, starting with every non-marked number (in this case, all multiples of 5 are already marked, and 7's first multiple is out of range). This means that we have now found all primes up to 10: {**2**, **3**, ~~4~~, **5**, ~~6~~, **7**, ~~8~~, ~~9~~, ~~10~~}

## Details

We will be writing code in the body of the `sieve` function to achieve this.

We will be receiving a number to define the range to explore, and we will be returning an array containing only the prime numbers.

## Expected test results

See the following number for an example:

```js
const number = 15; //the corresponding range would be [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

Given the preceding range, the following array should be returned:

```js
const primeNumbers = [2, 3, 5, 7, 11, 13];
```
