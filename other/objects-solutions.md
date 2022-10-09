# JavaScript algorithms to practice - Objects - Solutions

These are the solutions I worked out for the practice algorithms questions compiled in the [objects.md](objects.md) file. There might be other and more efficient ways to resolve the questions.

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

13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

```js
const getAllProps = (obj) => {
  //if obj is not defined
  if (!obj) return [];
  // if obj is a prototype
  if (typeof obj === "function") {
    let protoProps = obj.prototype;
    return Object.getOwnPropertyNames(protoProps);
    // if obj is an object
  } else {
    let objProps = Object.getOwnPropertyNames(obj);
    let proto = Object.getPrototypeOf(obj);
    let protoProps = Object.getOwnPropertyNames(proto);
    return objProps.concat(protoProps);
  }
};

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(getAllProps()); // with undefined
console.log(getAllProps("student")); // with string
console.log(getAllProps(String)); // with prototype String
console.log(getAllProps(Array)); // with prototype Array
console.log(getAllProps(student)); // with object
```

14. Write a JavaScript function to retrieve all the values of an object's properties.

The simplest way to achieve this is to use the Object.values method:

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const getValues = (obj) => {
  return Object.values(obj);
};

console.log(getValues(book));
```

If we couldn't use this method, we would look to loop over the object to retrive each value:

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const getValues = (obj) => {
  const values = [];
  for (key in obj) {
    values.push(obj[key]);
  }
  return values;
};

console.log(getValues(book));
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

16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const flip = (obj) => {
  let newObj = {};
  for (key in obj) {
    const newKey = obj[key]; //get the value and store it in new variable
    newObj[newKey] = key; //set up the new key/value pair in the new object
  }
  return newObj;
};
console.log(flip(book));
```

17. Write a JavaScript function to check whether an object contains given property.

```js
const book = {
  title: "The Road Ahead",
  author: "Bill Gates",
  libraryID: 1254,
};
const hasProperty = (obj, property) => {
  return obj.hasOwnProperty(property);
};

console.log(hasProperty(book, "title")); //true
console.log(hasProperty(book, "year")); //false
```

A. Write a JavaScript function to double all values in an object made of items and their price.

```js
const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
const double = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map((entry) => [entry[0], entry[1] * 2])
  );
};

console.log(double(prices));
```
