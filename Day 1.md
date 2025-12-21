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

## FOR...OF vs FOR...IN:

[Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

### FOR...OF:
The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
```
Syntax:
for (variable of iterable)
  statement
```

### FOR...IN:

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
```
Syntax:
for (variable in object)
  statement
```

### Difference: 
 for...in iterates over property names, for...of iterates over property values:
```
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7
```

---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Map & Set:

### How to create Map from Contructor and from an existing array:
[Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

```
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

console.log(map.get("a"));
// Expected output: 97

console.log(map.size);
// Expected output: 3

map.delete("b");

console.log(map.size);
// Expected output: 2
```

#### Convert an array to map:
```
Syntax:
new Map()
new Map(iterable) -> Here array can be used, as it's an iterable

If an iterable object (such as an array) is passed, all of its elements will be added to the new Map. Each element must be an array where the 0th index will be treated as "key" and 1st index of element will be considered as the value.

const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
  ['1', 'string1']
]);

Output: 
myMap.get(1) // 'one' - Here 1 is passed as number
myMap.get('1') // string1

```

#### Note about Map:
Map objects are collections of key-value pairs. **A key** in the Map may only occur once; it is unique in the Map's collection.
```
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
  ['1', 'string1'],
    [1, 'second one']
]);

myMap.get(1)

Output:
'second one'
```

### Set
- The Set object lets you store unique values of any type, whether primitive values or object references.
- Set objects are collections of values. **A value** in the set may only occur once;
- Set Composition:
-   - A.difference(B):
       <img width="172" height="107" alt="image" src="https://github.com/user-attachments/assets/ab02eb3c-a2d0-46a9-b7dd-fd1e7bc8a1e1" />
    - A.intersection(B):
        <img width="170" height="114" alt="image" src="https://github.com/user-attachments/assets/10227a1b-5096-40e3-8dc3-ea719a97c189" />
    - A.symmetricDifference(B):
        <img width="168" height="110" alt="image" src="https://github.com/user-attachments/assets/80c26e84-4940-4bb7-b7fc-e641ec1e37d6" />
    - A.union(B):
        <img width="168" height="106" alt="image" src="https://github.com/user-attachments/assets/d64e2666-7000-411b-b61f-919c450ee6db" />
    - A.isDisjointFrom(B):
        <img width="159" height="112" alt="image" src="https://github.com/user-attachments/assets/e045c2eb-10b3-4586-b17f-edac5e040163" />
    - A.isSubsetOf(B):
        <img width="168" height="109" alt="image" src="https://github.com/user-attachments/assets/5bda8ebd-cd8e-4040-989c-d4cf574ef488" />
    - A.isSupersetOf(B):
        <img width="162" height="118" alt="image" src="https://github.com/user-attachments/assets/f1ad081b-dd17-4829-8a85-9ef2538f3b88" />

#### Set-like Objects:

All set composition methods require this to be an actual Set instance, but their arguments just need to be set-like. A set-like object is an object that provides the following:
- A size property that contains a number.
- A has() method that takes an element and returns a boolean.
- A keys() method that returns an iterator of the elements in the set.

For example, Map objects are set-like because they also have size, has(), and keys(), so they behave just like sets of keys when used in set methods:

```
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "one"],
  [2, "two"],
  [4, "four"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
```

#### Instance methods available on sets:
- add
- has
- delete

```
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

#### Creating set from an array:
```
const myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
const mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread syntax to transform a set into an Array.
console.log([...mySet]); // Will show you exactly the same Array as myArray
```

#### Remove duplicate elements from an array:
```
// Case sensitive (set will contain "F" and "f")
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// Duplicate omission ("f" occurs twice in the string but set will contain only one)
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```



