### `??` vs `||` in JavaScript

`??` and `||` in JavaScript **look similar but behave differently** in edge cases. Here's the breakdown:

---

### ✅ `||` – Logical OR (Classic)

It returns the **first "truthy" value**.

```js
const name = "" || "Anonymous";  // "Anonymous"
const age = 0 || 18;             // 18
const isLoggedIn = false || true; // true
```

- Treats `false`, `0`, `""`, `null`, `undefined`, and `NaN` as **falsy**.
- So it skips over `0`, `false`, and `""`, even if you *want* those values.

---

### ✅ `??` – Nullish Coalescing (Modern, ES2020+)

It returns the **right-hand value only if the left is `null` or `undefined`** (and nothing else).

```js
const name = "" ?? "Anonymous";   // ""   ✅ kept the empty string
const age = 0 ?? 18;              // 0    ✅ kept the zero
const value = null ?? "default";  // "default"
const value2 = undefined ?? 42;   // 42
```

- Only considers `null` and `undefined` as missing values.
- Keeps `false`, `0`, and `""` as **valid values**.

---

### 💡 Use `??` when:

You want to provide **defaults only when a value is `null` or `undefined`** (not just falsy).

```js
function greet(name) {
    const userName = name ?? "Guest";
    console.log(`Hello, ${userName}`);
}
greet("");      // Hello, 
greet(null);    // Hello, Guest
```

---

### ❗ Gotcha: Don’t mix `||` and `??` without parentheses

```js
const result = null || undefined ?? "default"; // ❌ SyntaxError
```

You **must use parentheses**:

```js
const result = (null || undefined) ?? "default"; // ✅ "default"
```
