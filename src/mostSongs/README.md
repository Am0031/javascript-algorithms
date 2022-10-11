# Most Songs in Playlist

In this activity, the challenge is to create a function that takes an array of numbers, each representing the duration of a song. We will return the maximum number of songs present in the array that can fit into a 60-minute playlist.

## Details

We will be writing code in the body of the `mostSongsInPlaylist()` function to achieve the following: return the maximum number of elements present in the array, with a maximum sum of 60.

See the following array for an example:

    ```js
    var arr = [3, 4, 7, 2]; // 4 element array
    ```

Given the preceding array, the sum of `3`, `4`, `7`, and `2` is `16`, which is less than 60. All elements are used, so the answer is `4`.

See the following array for another example:

    ```js
    var arr = [4, 2, 5, 3, 1, 1, 2, 3, 4, 2, 5, 6, 3, 2, 4, 7, 3, 2, 3]; // 19 element array
    ```

Given the preceding array, the number `18` should be returned because all of the numbers in the array except `7` add up to `55`.
