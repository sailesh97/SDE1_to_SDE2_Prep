### Resources:
1. [Object oriented JavaScript playlist](https://youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7&si=pCM8Pft8KOrDKp_O)
    1. Covers:
        
        1. [Github repo by Net Ninjas](https://github.com/iamshaunjp/object-oriented-js)
        2. Evolution from variables to grouping related variables in objects to Constructor functions and then classes
        3. Also talks about Prototypal Inheritance:
            1. Also 11th Lecture by Net Ninjas 
            2. [By Piyush Garg](https://youtu.be/AOPmqw9scfc?si=D-45iCtMgCSnt3-8)

2. [Building a promise in JavaScript](https://youtu.be/1l4wHWQCCIc?si=OgaM7CceKRD6l9vs)

3. [Private Variables & Static Intializer Block in Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    1. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    2. [Episode 82 Onwards of Anurag Singh](https://youtu.be/Xgto1B3KxJA?si=DAwDW3sSvxs_CFkT):
        - Covers 4 core principles of OOPs:
            - Encapsulation / Data Hiding
                - Can be achieved via both Factory & Constructor functions
            - Abstraction
            - Inheritance
            - Polymorphism



3.II.Encapsulation:
    Diffrence in encapsulation via Factory vs Constructor:


----
# **Factory Function vs Constructor Function in JavaScript**
Both **factory functions** and **constructor functions** are used in JavaScript to create objects, but they have key differences in how they are implemented and used.

## **1. Factory Function**
A **factory function** is a regular JavaScript function that **returns an object**. It does not use `new` and allows more flexibility in object creation.

### **Example**
```javascript
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

const person1 = createPerson("Alice", 25);
console.log(person1.name); // Alice
person1.greet(); // Hello, my name is Alice
```

### **Key Features**
- Does not use `new`
- Returns an object explicitly
- Can easily use **closures** and **private variables**
- More flexible than constructor functions

---

## **2. Constructor Function**
A **constructor function** uses the `new` keyword to create and initialize objects. It does not explicitly return an object; instead, `this` refers to the new object being created.

### **Example**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}

const person2 = new Person("Bob", 30);
console.log(person2.name); // Bob
person2.greet(); // Hello, my name is Bob
```

### **Key Features**
- Uses `new` to create an instance
- No explicit `return`
- Uses `this` to define properties/methods
- More performance-efficient when combined with `prototype`

---

## **Key Differences**
| Feature            | Factory Function  | Constructor Function |
|--------------------|-----------------|----------------------|
| **Invocation**    | Called like a normal function | Requires `new` keyword |
| **Return Value**  | Explicitly returns an object | Implicitly returns `this` |
| **Private Variables** | Easily implemented using closures | Not easy to implement |
| **Prototype Usage** | Typically doesn't use prototypes | Uses prototypes for efficiency |
| **Flexibility**   | More flexible (e.g., conditionally returning different types of objects) | Less flexible |

---

## **When to Use Which?**
- Use **factory functions** when you need more flexibility, private variables, or object composition.
- Use **constructor functions** when you are dealing with large-scale object creation and want better performance via prototypes.

---

# **Private Variables in Factory Function**
### **How It Works**
- Variables declared inside the factory function (but outside the returned object) are **not exposed** to the outside.
- The returned object can still access them because of **closures**.

### **Example: Using Private Variables in a Factory Function**
```javascript
function createCounter() {
    let count = 0; // Private variable

    return {
        increment() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount() {
            return count; // Can still access it internally
        }
    };
}

const counter = createCounter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2
console.log(counter.getCount()); // 2

// Attempting to access 'count' directly
console.log(counter.count); // undefined (private variable)
```

### **Key Points**
1. **Encapsulation:** `count` is private because it is not included in the returned object.
2. **Closure:** The returned object's methods (`increment`, `decrement`, `getCount`) **retain access** to `count` even after `createCounter()` finishes execution.
3. **No Direct Access:** `counter.count` is `undefined` because `count` is not exposed.

---

## **Private Variables in Constructor Functions**  
### **Method 1: Using Closures for Private Variables**
```javascript
function Person(name, age) {
    let _age = age; // Private variable (not attached to `this`)

    this.name = name; // Public property

    this.getAge = function () {
        return _age;
    };

    this.birthday = function () {
        _age++; // Modify private variable internally
    };
}

const person1 = new Person("Alice", 25);

console.log(person1.name); // Alice (public)
console.log(person1.getAge()); // 25 (private accessed via method)

person1.birthday(); 
console.log(person1.getAge()); // 26 (age updated)

// Attempting to access _age directly
console.log(person1._age); // undefined (private)
```

---

### **Method 2: Using WeakMap for Private Variables (Modern Approach)**
With **ES6 WeakMap**, we can store private data separately.

```javascript
const privateData = new WeakMap();

function Person(name, age) {
    this.name = name;
    privateData.set(this, { age }); // Store private data

    this.getAge = function () {
        return privateData.get(this).age;
    };

    this.birthday = function () {
        privateData.get(this).age++; // Modify private age
    };
}

const person2 = new Person("Bob", 30);

console.log(person2.name); // Bob
console.log(person2.getAge()); // 30

person2.birthday();
console.log(person2.getAge()); // 31

// Attempting to access age directly
console.log(person2.age); // undefined
```

### **Why Use WeakMap?**
- **Truly private**: The data is stored separately and cannot be accessed even through object inspection.
- **Memory efficiency**: WeakMaps do not prevent garbage collection, so when an object is deleted, its private data is also removed.

---

## **Comparison: Factory vs Constructor for Private Variables**
| Feature        | Factory Function | Constructor Function |
|---------------|----------------|--------------------|
| **Uses closures** | ✅ Yes | ✅ Yes |
| **Uses `this`** | ❌ No | ✅ Yes |
| **Prototype methods** | ❌ No (methods inside object) | ✅ Yes (can use prototype for efficiency) |
| **WeakMap support** | ✅ Yes | ✅ Yes |
| **Encapsulation** | ✅ Strong | ✅ Strong with WeakMap |

---

## **Which One Should You Use?**
- Use **factory functions** when you want simplicity and clear encapsulation.
- Use **constructor functions with WeakMap** if you want to use `this` and prototype-based inheritance.

---

Would you like an example using **ES6 classes** with private fields (`#`) for better encapsulation?

