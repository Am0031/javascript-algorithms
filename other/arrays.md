# JavaScript algorithms to practice - Arrays

Practice algorithm questions focused on arrays - found on [w3r](https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php).

1. Write a JavaScript function to check whether an `input` is an array or not.
   Test Data :
   console.log(is_array('w3resource'));
   console.log(is_array([1, 2, 4, 0]));
   false
   true

2. Write a JavaScript function to clone an array.
   Test Data :
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));
   [1, 2, 4, 0]
   [1, 2, [4, 0]]

3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
   Test Data :
   console.log(first());
   console.log(first([7, 9, 0, -2]));
   console.log(first([],3));
   console.log(first([7, 9, 0, -2],3));
   console.log(first([7, 9, 0, -2],6));
   console.log(first([7, 9, 0, -2],-3));
   Expected Output :
   0
   7
   []
   [7, 9, 0]
   [7, 9, 0, -2]
   []

4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
   Test Data :
   console.log(last([7, 9, 0, -2]));
   console.log(last([7, 9, 0, -2],3));
   console.log(last([7, 9, 0, -2],6));
   Expected Output :
   -2
   [9, 0, -2]
   [7, 9, 0, -2]

5. Write three different JavaScript instructions to join all elements of the following array into a string and get the expected outputs.
   Sample array : myColor = ["Red", "Green", "White", "Black"];
   Expected Output :
   "Red,Green,White,Black"
   "Red,Green,White,Black"
   "Red+Green+White+Black"

6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

7. Write a JavaScript program to sort the items of an array.
   Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
   Sample Output : [-4,-3,1,2,3,5,6,7,8]

8. Write a JavaScript program to find the most frequent item of an array.
   Sample array : var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
   Sample Output : a ( 5 times )

9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
