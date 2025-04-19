### Qs: 
```async function abc(){return 20;} const a = abc(); console.log(a);```
Here's the output of the provided JavaScript code in markdown format:

```javascript
async function abc() {
  return 20;
}

const a = abc();
console.log(a);
```

### Output:
```plaintext
Promise {<fulfilled>: 20}
```

### Explanation:
- `abc()` is an **async function**, so it **returns a Promise**. No matter what you return
- Even though `return 20;` looks like it returns a number, async functions automatically wrap the return value in a resolved Promise.
- So `a` becomes `Promise {<fulfilled>: 20}`.
- To log the actual value (`20`), you would need to use `await` or `.then()`.

### Example with `await`:
```javascript
async function abc() {
  return 20;
}

async function main() {
  const a = await abc();
  console.log(a); // Output: 20
}

main();
```