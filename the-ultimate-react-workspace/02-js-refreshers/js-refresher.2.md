- In map, filter, reduce:
    - These three methods are very imp with respect to react state updates, as they returns a new array and doesn't mutate the original array.
    - can chain these funcs one after another

- reduce:
    - arr.reduce((accumulator, currentValueWhileIterating) => {}, initialValue)

- sort
    - It's not like map, filter & reduce, as it mutates the original array
    - arr.sort((a,b) => a-b) // --- It will sort in asc order
    - arr.sort((a,b) => b-a) // --- It will sort in desc order

- Difference between slice & splice:
    ### ✂️ `slice()` vs `splice()` in JavaScript

---

### 🥪 `slice()`

- **Purpose**: Extracts a portion of an array or string.
- **Returns**: A **new array** or string (shallow copy).
- **Original is mutated?** ❌ No. It's like map, filter and reduce. Doesn't touch the original
- **Syntax**:
  ```js
  array.slice(start, end);
  string.slice(start, end);
  ```
- **Notes**:
  - `start` is inclusive
  - `end` is exclusive
  - Both `start` and `end` are optional
  - Supports negative indices
  - default start index is 0 and default end index in arr.length

```js
const nums = [10, 20, 30, 40];
const result = nums.slice(1, 3); // [20, 30]
console.log(nums); // [10, 20, 30, 40] (unchanged)
```
```
const arr = [10, 20, 30, 40, 50];

arr.slice();         // [10, 20, 30, 40, 50] – full copy
arr.slice(2);        // [30, 40, 50] – from index 2 to end
arr.slice(1, 4);     // [20, 30, 40] – index 1 to 3
arr.slice(-2);       // [40, 50] – last 2 elements
arr.slice(-3, -1);   // [30, 40] – from 3rd-last to 2nd-last
```

❗ Doesn't mutate the original
```
const arr = [10, 20, 30];
const newArr = arr.slice(1);
console.log(arr);     // [10, 20, 30]
console.log(newArr);  // [20, 30]
```

🧠 Tip:
Use slice() with no arguments to create a shallow copy of an array or string:
```
const copy = original.slice(); // quick clone
```
---

### 🛠️ `splice()` in JavaScript

The `splice()` method **adds, removes, or replaces elements** in an array.  
⚠️ Unlike `slice()`, it **modifies the original array**.

---

### ✅ Syntax

```js
array.splice(start, deleteCount, item1, item2, ...)
```

- `start` — Index at which to start changing the array.
- `deleteCount` — Number of elements to remove.
- `item1, item2, ...` — Elements to add (optional).

---

### 🧪 Examples

#### 🔹 Remove elements

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);     // Removes 2 elements starting at index 1
// returns [2, 3]
// arr is now [1, 4, 5]
```

#### 🔹 Insert elements

```js
const arr = [1, 4, 5];
arr.splice(1, 0, 2, 3); // At index 1, remove 0 elements, insert 2 and 3
// arr becomes [1, 2, 3, 4, 5]
```

#### 🔹 Replace elements

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 'a', 'b'); // From index 2, remove 2 items, add 'a' and 'b'
// returns [3, 4]
// arr is now [1, 2, 'a', 'b', 5]
```

---

### 🧠 Notes

- It **mutates** the original array.
- It returns an array of the **removed elements**.
- `deleteCount` can be 0 if you only want to insert.

---

### 🔄 `splice()` vs `slice()`

| Feature     | `slice()`                         | `splice()`                         |
|-------------|-----------------------------------|------------------------------------|
| Mutates?    | ❌ No                             | ✅ Yes                             |
| Returns     | Extracted portion (copy)          | Removed items                      |
| Use case    | Copying, extracting               | Inserting, removing, replacing     |

---

### 📌 Quick Tricks

```js
// Remove last element
arr.splice(-1, 1);

// Remove all elements from index 2
arr.splice(2);

// Insert at end
arr.splice(arr.length, 0, "new");
```

---

Let me know if you want a visual table, code sandbox, or animated breakdown!


---

### 🔄 Key Differences

| Feature       | `slice()`                        | `splice()`                          |
|---------------|----------------------------------|-------------------------------------|
| Mutates array | ❌ No                            | ✅ Yes                              |
| Returns       | Shallow copy of sliced portion  | Array of removed elements           |
| Use cases     | Extracting without modifying     | Inserting, removing, or replacing   |
| Type support  | Arrays & Strings                 | Arrays only                         |

---

### ✅ Summary

Use `**slice()**` when you want a copy or a portion of the data without altering the original.

Use `**splice()**` when you need to **modify** the array in place (e.g., insert, remove, or replace items).
