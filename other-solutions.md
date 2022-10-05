# Other algorithms to practice - My Solutions

1. Write a JavaScript function to check whether an `input` is an array or not.

```
const is_Array = (arr) => Array.isArray(arr);
```

2. Write a JavaScript function to clone an array.

```
const array_clone = (arr) => {
const clonedArray = [...arr];
return clonedArray;
}
```

Note: other alternatives to clone: Array.from(arr), .slice(), .map((i)=> i), .filter(()=> true)

3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

```
const first =  (arr, n) => {
    if (!arr) return 0;
    if (!n) return arr[0];
    if (n < 0) return [];
    return arr.slice(0, n);
  };
```

4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

```
const last = (arr, n)=> {
  if(!n) return arr[arr.length -1];
  return arr.slice(-n)
};
```

5. Write three different JavaScript instructions to join all elements of the following array into a string and get the expected outputs.

```
const myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join()); // or console.log(myColor.join(","));
console.log(myColor.join("+"));

```

6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

```
//using window.prompt to get input to make sure the front 0 is not removed
const str=window.prompt().toString();

//storing the front 0 (first character in the string) into the result array
const result = [str[0]];

//checking the following numbers one by one against their predecessor
for(let i=1; i < str.length; i+=1)
  {
    if((str[i-1]%2 === 0)&&(str[i]%2 === 0))
     {
      result.push('-', str[i]);
     }
    else
     {
      result.push(str[i]);
     }
  }
console.log(result.join(''));
```

7. Write a JavaScript program to sort the items of an array.

```
const sort = (array)=>{
  if (!array || array.length <= 1) return array;

  for (let i = 0; i < array.length - 1; i += 1) {

    for (let ii = 0; ii < array.length - 1; ii += 1) {
      if (array[ii] > array[ii + 1]) {
        const temp = array[ii + 1];
        array[ii + 1] = array[ii];
        array[ii] = temp;
      }
    }
  }
  return array;
};

console.log(sort([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));
```

8. Write a JavaScript program to find the most frequent item of an array.

```
const mostFrequent = (arr)=> {
    let maxCount = 1;
    let count = 0;
    let item;
    for (let i=0; i<arr.length; i++)
    {
            for (let j=i; j<arr.length; j++)
            {
                    if (arr[i] == arr[j])
                    m++;
                    if (maxCount<count)
                    {
                    maxCount=count;
                    item = arr[i];
                    }
            }
            count=0;
    }
    return(`${item} ( ${maxCount} times ) `) ;
};

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
```

9. Write a JavaScript program which accept a string as input and swap the case of each character.

```

```
