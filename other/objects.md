# JavaScript algorithms to practice - Objects

1. Write a JavaScript program to list the properties of a JavaScript object.
   Sample object:
   var student = {
   name : "David Rayy",
   sclass : "VI",
   rollno : 12 };
   Sample Output: name,sclass,rollno

2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
   Sample object:
   var student = {
   name : "David Rayy",
   sclass : "VI",
   rollno : 12 };

3. Write a JavaScript program to get the length of a JavaScript object.
   Sample object :
   var student = {
   name : "David Rayy",
   sclass : "VI",
   rollno : 12 };

4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];
Sample output:
Already read 'The Road Ahead' by Bill Gates.
Already read 'Walter Isaacson' by Steve Jobs.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
   Volume of a cylinder : V = πr2h
   where r is the radius and h is the height of the cylinder.

6. Write a JavaScript program which returns a subset of a string.
   Sample Data: dog
   Expected Output: ["d", "do", "dog", "o", "og", "g"]

7. Write a JavaScript program to create a Clock.
   Note: The output will come every second.
   Expected Console Output :
   "14:37:42"
   "14:37:43"
   "14:37:44"
   "14:37:45"
   "14:37:46"
   "14:37:47"

8. Write a JavaScript program to calculate the area and perimeter of a circle.
   Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

9. Write a JavaScript program to sort an array of JavaScript objects.
   Sample Object :

var library = [
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}];
Expected Output:

[[object Object] {
author: "Walter Isaacson",
libraryID: 4264,
title: "Steve Jobs"
}, [object Object] {
author: "Suzanne Collins",
libraryID: 3245,
title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
author: "The Road Ahead",
libraryID: 1254,
title: "Bill Gates"
}]

11. Write a JavaScript function to print all the methods in an JavaScript object.
    Test Data :
    console.log(all_properties(Array));
    ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

12. Write a JavaScript function to parse an URL.

13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

14. Write a JavaScript function to retrieve all the values of an object's properties.

15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

17. Write a JavaScript function to check whether an object contains given property.

18. Write a JavaScript function to check whether a given value is a DOM element.

Other questions:

A. Write a JavaScript function to double all values in an object made of items and their price.
Sample object:
prices: {
banana: 1,
orange: 2,
meat: 4,
}
Expected output:
prices: {
banana: 2,
orange: 4,
meat: 8,
}
