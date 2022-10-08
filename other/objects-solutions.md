# JavaScript algorithms to practice - Objects - Solutions

1. Write a JavaScript program to list the properties of a JavaScript object.

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
