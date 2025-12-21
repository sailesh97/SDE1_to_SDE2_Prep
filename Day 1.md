#### Array.from
#### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
#### Difference between Array-like object vs iterable object
#### Difference between for of loop vs for in loop
#### Iterators vs Generators
#### .next() in javascript

<img width="1072" height="614" alt="image" src="https://github.com/user-attachments/assets/6b852336-c22f-4425-aaa3-07512021e1e5" />

<img width="1085" height="631" alt="image" src="https://github.com/user-attachments/assets/d50af907-e54d-46c0-8584-f9c666aca580" />


-----
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

for..of loop can be used to iterate over these iterators
That means we can use for...of loop on what is returned from arr.values(), arr.keys() and whatever is mentioned above

```
const arr = [12,23,53]
for(const a of arr) console.log(a)
```
--------

- Objects are not considered as either as iterator or array-like objects

