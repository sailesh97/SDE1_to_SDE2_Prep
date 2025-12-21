### Agenda:
#### Array.from
#### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
#### Difference between Array-like object vs iterable object
#### Difference between for of loop vs for in loop
#### Iterators vs Generators
#### .next() in javascript

<img width="1072" height="614" alt="image" src="https://github.com/user-attachments/assets/6b852336-c22f-4425-aaa3-07512021e1e5" />

<img width="1085" height="631" alt="image" src="https://github.com/user-attachments/assets/d50af907-e54d-46c0-8584-f9c666aca580" />


----------------------------------------------------------------------------------------------------------------------------------------------------------
The following are all built-in JavaScript iterators:

1. The Array Iterator returned by:
  - Array.prototype[Symbol.iterator](),
  - Array.prototype.values(),
  - Array.prototype.keys(),
  - Array.prototype.entries(),
  - TypedArray.prototype.values(),
  - TypedArray.prototype.keys(),
  - TypedArray.prototype.entries(),
  - TypedArray.prototype[Symbol.iterator](), and
  - arguments[Symbol.iterator]().
2. The String Iterator returned by
  - String.prototype[Symbol.iterator]().
3. The Map Iterator returned by
  - Map.prototype[Symbol.iterator]().
  - Map.prototype.values(),
  - Map.prototype.keys(),
  - Map.prototype.entries(), and
  
4. The Set Iterator returned by
   - Set.prototype[Symbol.iterator]().
   - Set.prototype.values(),
   - Set.prototype.keys(),
   - Set.prototype.entries(), and
   
5. The RegExp String Iterator returned by
    - RegExp.prototype[Symbol.matchAll]() and
    - String.prototype.matchAll().
6. The Generator object returned by generator functions.
7. The Segments Iterator returned by the
    - [Symbol.iterator]() method of the Segments object returned by Intl.Segmenter.prototype.segment().
8. The Iterator Helper returned by iterator helper methods such as Iterator.prototype.filter() and Iterator.prototype.map().

## **FOR..OF** loop can be used to iterate over these iterators
That means we can use for...of loop on what is returned from arr.values(), arr.keys() and whatever is mentioned above

```
const arr = [12,23,53]
for(const a of arr) console.log(a)
```
--------

- Objects are not considered as either as iterator or array-like objects
-    - [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol:~:text=Some%20built%2Din%20types%20are%20built%2Din%20iterables%20with%20a%20default%20iteration%20behavior%2C%20such%20as%20Array%20or%20Map%2C%20while%20other%20types%20(such%20as%20Object)%20are%20not.)


----------------------------------------------------------------------------------------------------------------------------------------------------------

---Array.from file  start---

## Array.from:
### Initial Definition
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

Array.from() lets you create Arrays from:

- iterable objects (objects such as Map and Set); or, if the object is not iterable,
- array-like objects (objects with a length property and indexed elements).
  - const a = [1,2,3] -> It's not array-like object, but an array only and all array has a length proprty built-in it.
  - const obj = {length: 5} -> This can be considered as an array like

Syntax: 
```
Array.from(items, mapFn, thisArg)
items
An iterable or array-like object to convert to an array.

mapFn - **Optional**
A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:

element
The current element being processed in the array.

index
The index of the current element being processed in the array.

thisArg Optional
Value to use as this when executing mapFn.

Return value: A new Array instance.
```

Example:
```
String:
Array.from("foo");
// [ "f", "o", "o" ]

Set:
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

Map:
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];


Array-like object:
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

```

- To convert an ordinary object that's not iterable or array-like to an array (by enumerating its property keys, values, or both), use Object.keys(), Object.values(), or Object.entries().
- Array.from() never creates a sparse array. If the items object is missing some index properties, they become undefined in the new array.
-   ```
    const arr = [1, , 3];
    console.log(Array.from(arr))

    Output:  [1, undefined, 3]
    ```
- Array.from() has an optional parameter mapFn, which allows you to execute a function on each element of the array being created, similar to map()

### Terminologies in Initial Definition of Array.from:

1. Array-like Objects
2. Sparse array

#### 1. Array-like Objects: 
- const a = [1,2,3] -> It's not array-like object, but an array only and all array has a length proprty built-in it.
- const obj = {length: 5} -> This can be considered as an array like

#### 2. Sparse array: 
A sparse array in JavaScript is an array that has "empty slots" or "holes" where no elements have been assigned a value, meaning the elements are not stored contiguously. The length property of a sparse array is greater than the actual number of defined elements in it. 

##### How to Create a Sparse Array
You can create a sparse array in several ways: 
2.1 Using array literals: Omit values between commas.
```
const sparseArr = [1, , 3]; 
// sparseArr.length is 3, but only two elements exist
```
2.2 Using the Array constructor: Call the constructor with a single number argument.
```
const sparseArr = new Array(5); 
// Creates an array with 5 empty slots. sparseArr.length is 5
```
2.3 Assigning to an index beyond the current length:
```
const sparseArr = [1, 2];
sparseArr[10] = 100;
// sparseArr.length is 11, with holes from index 2 to 9
```

2.4 Using the delete operator: This is generally discouraged for arrays as it leaves a hole instead of removing the element and shifting subsequent elements.
```
const sparseArr = [1, 2, 3];
delete sparseArr[1];
// sparseArr is now [1, empty, 3]; sparseArr.length is still 3
```

##### Working with Sparse Arrays:
1. You can check if an index is an actual element (not a hole) using the in operator or the hasOwnProperty() method: 
```
const sparseArr = [1, , 3];

console.log(1 in sparseArr);           // false (index 1 is a hole)
console.log(sparseArr.hasOwnProperty(1)); // false

console.log(0 in sparseArr);           // true (index 0 has a value)
```

2. To transform a sparse array into a **dense array** (an array without holes), you can use methods like Array.prototype.filter() or the spread syntax:
   
 - Using filter(): The filter method ignores empty slots and only includes elements with assigned values in the resulting array.
```
const denseArr = sparseArr.filter(function (element) {
  return true; // Simple filter to remove holes
});
// denseArr is now [1, 3]
```
- Using flat(): If you have an array with potential nested arrays and holes, flat() can help.
```
const denseArr = sparseArr.flat(); 
// denseArr is now [1, 3]
```

- Using the spread syntax: The spread operator converts holes to undefined values.
```
const undefinedArr = [...sparseArr];
// undefinedArr is [1, undefined, 3]
```
---Array.from file  end---

