### 📚 Does `books.slice().sort(...)` Affect the Original Array?

---

### 🧠 Example Setup:

```js
const books = [
  { title: "Book A", page: 200, author: { name: "John" } },
  { title: "Book B", page: 150, author: { name: "Jane" } },
];
```

And you run:

```js
const sortedBooks = books.slice().sort((a, b) => a.page - b.page);
```

---

### ✅ Will this affect the original `books` array?

**No**, the original `books` array will **not be re-ordered**, because:

- `slice()` creates a **shallow copy** of the array.
- `sort()` sorts that copy **in place**.
- So `books` stays in its original order, and `sortedBooks` is sorted.

---

### ⚠️ But... What About the Objects Inside?

Because `slice()` only makes a **shallow copy**, the **objects inside** the array (like individual book objects) are **still the same references** as in the original.

So if you do:

```js
sortedBooks[0].title = "Changed!";
```

That **will** change the title of the first book in `books` too — because you're modifying the object, not the array structure.

---

### 🔁 TL;DR Summary

| Operation                 | Affects Original? | Why                             |
|--------------------------|-------------------|----------------------------------|
| `.slice()`               | ❌ No              | Creates a shallow copy of array |
| `.sort()` on `.slice()`  | ❌ No              | Sorts the copied array          |
| Changing nested data     | ✅ Yes             | Objects are shared references   |

---

### 🛡️ Want a Deep Clone?

Use `JSON.parse(JSON.stringify(...))` if you want to clone both the array and its nested data:

```js
const deepCopy = JSON.parse(JSON.stringify(books));
const sortedDeep = deepCopy.sort((a, b) => a.page - b.page);
```

---

Let me know if you want a utility function for deep
