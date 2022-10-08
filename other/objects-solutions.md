# JavaScript algorithms to practice - Objects - Solutions

1. Write a JavaScript program to list the properties of a JavaScript object.

The simplest way to achieve ths is to use the Object.keys method which gives us an array of keys, then join all of them in a string:

```js
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const returnProperties = (obj) => {
  return Object.keys(obj).join();
};

console.log(returnProperties(student));
```

If we could not use this method, then we would look to loop over the object to add each key to a variable (could be array or string):

```js
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const returnProperties = (obj) => {
  let propertiesList = [];
  for (key in obj) {
    propertiesList.push(key);
  }
  return propertiesList.join(",");
};

console.log(returnProperties(student));
```

2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

```js
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const removeKey = (obj, key) => {
  delete obj[key];
  console.log(obj);
};
console.log(removeKey(student, "rollno"));
```

3. Write a JavaScript program to get the length of a JavaScript object.

the simplest way to achieve it is to use the Object.keys method as it gives us an array and then get the length of that array:

```js
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const getObjectLength = (obj) => {
  return Object.keys(obj).length;
};

console.log(getObjectLength(student));
```

If we could not use this method, we would look to loop over the object and count how many properties there are:

```js
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const getObjectLength = (obj) => {
  let length = 0;

  for (key in obj) {
    length += 1;
  }
  return length;
};

console.log(getObjectLength(student));
```

4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the books in a given array of books.

```js
const getStatus = (books) => {
  for (let book of books) {
    const status = book.readingStatus
      ? "Already read"
      : "You still need to read";
    console.log(`${status} '${book.title}' by ${book.author}`);
  }
};
```

15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

The simplest way to achieve this is by using the Object.entries method:

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const convert = (obj) => {
  return Object.entries(obj);
};

console.log(convert(book));
```

If we could not use this method, then we would look to loop over the object and add the pair each time into a result array:

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const convert = (obj) => {
  let result = [];
  for (key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
};

console.log(convert(book));
```
