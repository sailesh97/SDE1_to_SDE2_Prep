# What is UML? What are different types of Diagrams in UML? When to use which one?

## What is UML?

**UML (Unified Modeling Language)** is a **standard visual language used to model and communicate the design of a software system**.

Think of UML as a **blueprint for software**.

Just like an architect uses different drawings to describe a building:

* Floor plan → shows structure
* Electrical diagram → shows connections
* Elevation → shows appearance

Similarly, UML provides different **diagrams**, each showing a different aspect of a software system.

> **UML is not a programming language.**
> It is a **modeling/visualization language**.

For example, suppose you're designing an **Online Shopping System**.

You might want to answer:

* Who uses the system?
* What can they do?
* What classes/entities exist?
* How are classes related?
* How does an order flow through the system?
* How are components deployed?

Different UML diagrams answer different questions.

---

# Types of UML Diagrams

UML has **14 standard diagram types**, broadly divided into **2 categories**:

```text
                         UML
                          │
             ┌────────────┴────────────┐
             │                         │
       Structural                  Behavioral
        Diagrams                    Diagrams
             │                         │
       "What exists?"            "What happens?"
```

### 1. Structural Diagrams

Describe the **static structure** of a system.

> **What things exist and how are they related?**

There are **7**:

1. Class Diagram ⭐
2. Object Diagram
3. Component Diagram ⭐
4. Deployment Diagram ⭐
5. Package Diagram
6. Composite Structure Diagram
7. Profile Diagram

### 2. Behavioral Diagrams

Describe the **behavior/dynamics** of a system.

> **What happens and how does the system behave?**

There are **7**:

1. Use Case Diagram ⭐
2. Activity Diagram ⭐
3. Sequence Diagram ⭐
4. State Machine Diagram
5. Communication Diagram
6. Interaction Overview Diagram
7. Timing Diagram

---

# 1. Class Diagram ⭐

Probably the **most commonly used UML diagram**.

It describes:

* Classes
* Attributes
* Methods
* Relationships
* Inheritance
* Interfaces

Example:

```text
┌──────────────────┐
│      User        │
├──────────────────┤
│ - id             │
│ - name           │
│ - email          │
├──────────────────┤
│ + login()        │
│ + logout()       │
└────────┬─────────┘
         │
         │ places
         ▼
┌──────────────────┐
│      Order       │
├──────────────────┤
│ - orderId        │
│ - orderDate      │
│ - status         │
├──────────────────┤
│ + createOrder()  │
│ + cancelOrder()  │
└──────────────────┘
```

### When to use?

Use a **Class Diagram** when you want to understand/design:

> **"What are the main objects/classes in my system and how are they related?"**

Useful during:

* Object-oriented design
* Backend architecture
* API/domain modeling
* Designing classes
* Understanding inheritance/composition

---

# 2. Object Diagram

An Object Diagram is basically a **snapshot of a Class Diagram at a particular moment**.

Class Diagram:

```text
User
-----
id
name
```

Object Diagram:

```text
user1 : User
---------
id = 101
name = "Sailesh"
```

Another object:

```text
user2 : User
---------
id = 102
name = "Atul"
```

### Difference

| Class Diagram   | Object Diagram       |
| --------------- | -------------------- |
| Blueprint       | Snapshot             |
| Defines classes | Shows actual objects |
| General         | Specific             |
| `User`          | `user1 : User`       |

### When to use?

When you want to understand:

> **"What does the system look like with actual instances at a particular point in time?"**

Less commonly used than Class Diagrams.

---

# 3. Use Case Diagram ⭐

Shows **who interacts with the system and what they can do**.

For an e-commerce system:

```text
                ┌───────────────────────┐
                │   E-Commerce System   │
                │                       │
Customer ──────►│ Browse Products       │
Customer ──────►│ Add to Cart           │
Customer ──────►│ Place Order           │
Customer ──────►│ Make Payment          │
                │                       │
Admin ─────────►│ Manage Products       │
Admin ─────────►│ Manage Orders         │
                └───────────────────────┘
```

The external entities are called **Actors**.

### When to use?

At the **requirements stage**.

Use it when asking:

> **"Who uses my system and what can they do?"**

Very useful for:

* Requirement gathering
* Understanding system scope
* Talking to business stakeholders
* Identifying features

---

# 4. Activity Diagram ⭐

Shows a **workflow/process**.

For placing an order:

```text
       Start
         │
         ▼
   Browse Products
         │
         ▼
     Add to Cart
         │
         ▼
     Checkout
         │
         ▼
   Make Payment
         │
      ┌──┴──┐
      │     │
   Success  Failed
      │     │
      ▼     ▼
Create     Retry
Order      Payment
      │
      ▼
      End
```

### When to use?

When you want to understand:

> **"What steps does a process go through?"**

Great for:

* Business workflows
* Approval processes
* Order processing
* Login flows
* Complex business logic

### Think:

**Activity Diagram = Flowchart for system/business processes**

---

# 5. Sequence Diagram ⭐

Shows **how objects/services communicate over time**.

For placing an order:

```text
Customer       Frontend       Order Service       Payment
   │               │                │                │
   │ Place Order   │                │                │
   ├──────────────►│                │                │
   │               │ createOrder()  │                │
   │               ├───────────────►│                │
   │               │                │ charge()       │
   │               │                ├───────────────►│
   │               │                │     Success    │
   │               │                │◄───────────────┤
   │               │   Order Created│                │
   │               │◄───────────────┤                │
   │     Success   │                │                │
   │◄──────────────┤                │                │
```

The **vertical direction represents time**.

### When to use?

When asking:

> **"Who calls whom, and in what order?"**

Extremely useful for:

* API flows
* Microservices
* Backend design
* Debugging complex flows
* Understanding request/response interactions

For your kind of work with **React → BFF → GraphQL → downstream services**, Sequence Diagrams can be particularly useful.

---

# 6. State Machine Diagram

Shows how an object changes its **state** based on events.

For an Order:

```text
             placeOrder
   ┌─────────────────────────┐
   │                         ▼
┌───────┐              ┌─────────┐
│ Draft │─────────────►│ Placed  │
└───────┘              └────┬────┘
                             │
                       paymentSuccess
                             │
                             ▼
                       ┌───────────┐
                       │ Confirmed │
                       └─────┬─────┘
                             │
                          shipped
                             │
                             ▼
                       ┌───────────┐
                       │ Delivered │
                       └───────────┘
```

### When to use?

When an entity has **many states and transitions**.

Examples:

```text
Order
Payment
Shipment
Ticket
User Account
```

For example:

```text
Payment

Pending
   ↓
Processing
   ↓
Success
```

or

```text
Processing
    ↓
  Failed
```

### Think:

**State Diagram = Life cycle of an object**

---

# 7. Component Diagram ⭐

Shows the **major software components/modules** and their dependencies.

For a web application:

```text
┌─────────────┐
│   React UI  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  BFF/API    │
└──────┬──────┘
       │
   ┌───┴────┐
   ▼        ▼
┌───────┐ ┌──────────┐
│ Order │ │ Payment  │
│Service│ │ Service  │
└───┬───┘ └────┬─────┘
    │           │
    ▼           ▼
┌────────┐  ┌─────────┐
│  DB    │  │Payment  │
│        │  │Gateway  │
└────────┘  └─────────┘
```

### When to use?

When designing **high-level software architecture**.

Ask:

> **"What are the major software components and how do they depend on each other?"**

Very useful for:

* Microservices
* Modular applications
* System architecture
* Technical documentation

---

# 8. Deployment Diagram ⭐

Shows **where software runs physically/infrastructure-wise**.

Example:

```text
              Internet
                  │
                  ▼
          ┌──────────────┐
          │ Load Balancer│
          └───────┬──────┘
                  │
          ┌───────▼───────┐
          │ Application    │
          │ Server / EC2   │
          └───────┬───────┘
                  │
          ┌───────▼───────┐
          │   Database    │
          │     Server    │
          └───────────────┘
```

### When to use?

When asking:

> **"Where does each software component run?"**

Useful for:

* Cloud architecture
* AWS/Azure/GCP architecture
* Servers
* Containers
* Network architecture
* Production deployments

---

# 9. Package Diagram

Groups related classes/components into **packages**.

```text
┌──────────────────┐
│     User         │
│     Package      │
│                  │
│ User             │
│ Profile          │
│ Authentication   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│     Order        │
│     Package      │
│                  │
│ Order            │
│ OrderItem        │
│ Cart             │
└──────────────────┘
```

### When to use?

When a system becomes large and you want to understand:

> **"How should I group related classes/modules?"**

---

# 10. Composite Structure Diagram

Shows the **internal structure of a class/component**.

For example:

```text
┌───────────────────────────────┐
│       OrderService            │
│                               │
│ ┌─────────┐    ┌───────────┐ │
│ │Validator│───►│Repository │ │
│ └─────────┘    └───────────┘ │
│                     │         │
│                     ▼         │
│                 Database      │
└───────────────────────────────┘
```

### When to use?

When the **inside of a complex component/class** matters.

Not commonly needed for everyday application design.

---

# 11. Profile Diagram

Used to **extend/customize UML** for a particular domain.

For example, UML can be extended with concepts specific to:

* Embedded systems
* Real-time systems
* Enterprise architecture

This is generally more advanced and uncommon in normal application development.

---

# 12. Communication Diagram

Similar to a Sequence Diagram, but emphasizes:

> **Which objects communicate with which?**

Rather than emphasizing the timeline.

Example:

```text
Customer
   │
   │ 1: placeOrder()
   ▼
OrderService
   │
   │ 2: createOrder()
   ▼
Order
   │
   │ 3: processPayment()
   ▼
PaymentService
```

### When to use?

When you care more about:

**relationships between communicating objects**

than the detailed timeline.

---

# 13. Interaction Overview Diagram

Essentially combines ideas from:

**Activity Diagram + Interaction/Sequence Diagrams**

Example:

```text
Start
  │
  ▼
[Login Sequence]
  │
  ▼
[Browse Products Sequence]
  │
  ▼
[Checkout Sequence]
  │
  ▼
End
```

### When to use?

For **large/complex workflows** where each step itself involves a complicated interaction.

Not commonly needed for everyday development.

---

# 14. Timing Diagram

Shows how the **state/value of something changes over time**.

For example, a network connection:

```text
State

Connected ────────────────┐
                          │
                          ▼
                      Disconnected
                          │
                          ▼
                      Connecting
                          │
                          ▼
                      Connected
        ───────────────────────────► Time
```

### When to use?

Useful in:

* Real-time systems
* Embedded systems
* Hardware/software interaction
* Protocol design

Rarely needed for typical web applications.

---

# All 14 UML Diagrams — Quick Table

| Diagram                  | Type       | Main Question                                          |
| ------------------------ | ---------- | ------------------------------------------------------ |
| **Class** ⭐              | Structural | What classes exist and how are they related?           |
| **Object**               | Structural | What does the system look like at a particular moment? |
| **Component** ⭐          | Structural | What are the major software components?                |
| **Deployment** ⭐         | Structural | Where does the software run?                           |
| **Package**              | Structural | How should elements be grouped?                        |
| **Composite Structure**  | Structural | What is inside a component/class?                      |
| **Profile**              | Structural | How can UML be customized for a domain?                |
| **Use Case** ⭐           | Behavioral | Who uses the system and what can they do?              |
| **Activity** ⭐           | Behavioral | What is the workflow/process?                          |
| **Sequence** ⭐           | Behavioral | Who communicates with whom and in what order?          |
| **State Machine**        | Behavioral | How does an object's state change?                     |
| **Communication**        | Behavioral | Which objects communicate?                             |
| **Interaction Overview** | Behavioral | How do multiple interactions form a larger workflow?   |
| **Timing**               | Behavioral | How does behavior/state change over time?              |

---

# The Most Important Ones to Learn

You **don't need to memorize all 14 equally**.

For a typical software engineer, I'd prioritize:

### 🥇 Level 1 — Must know

```text
Use Case
   ↓
Class
   ↓
Sequence
   ↓
Activity
```

These cover most day-to-day modeling.

### 🥈 Level 2 — Very useful

```text
Component
Deployment
State Machine
```

Especially useful for **backend/system architecture and distributed systems**.

### 🥉 Level 3 — Learn when needed

```text
Object
Package
Communication
Composite Structure
Interaction Overview
Timing
Profile
```

---

# UML vs ER Diagram

Since you've recently been learning **ER Modeling**, this distinction is important.

| ER Diagram                               | UML                                   |
| ---------------------------------------- | ------------------------------------- |
| Primarily used for **database modeling** | Used for **software/system modeling** |
| Entities                                 | Classes/objects                       |
| Attributes                               | Attributes                            |
| Relationships                            | Associations                          |
| Cardinality                              | Multiplicity                          |
| Focuses on data                          | Covers data + behavior + architecture |
| Common in DB design                      | Common in software design             |

For example:

### ER Diagram

```text
CUSTOMER
---------
customer_id
name
email

      │
      │ places
      │
      ▼

ORDER
---------
order_id
order_date
```

Focus:

> **How is data structured?**

### UML Class Diagram

```text
┌──────────────────┐
│     Customer     │
├──────────────────┤
│ id               │
│ name             │
│ email            │
├──────────────────┤
│ login()          │
│ placeOrder()     │
└────────┬─────────┘
         │
       places
         │
         ▼
┌──────────────────┐
│      Order       │
├──────────────────┤
│ id               │
│ orderDate        │
├──────────────────┤
│ calculateTotal() │
│ cancel()         │
└──────────────────┘
```

Focus:

> **How is the software structured and how does it behave?**

---

# A Simple Way to Remember UML

Think about designing an **Amazon-like application**.

Ask these questions in order:

```text
1. WHO uses it?
       ↓
   Use Case Diagram

2. WHAT classes/objects exist?
       ↓
   Class Diagram

3. HOW does a particular workflow happen?
       ↓
   Activity Diagram

4. HOW do the components communicate?
       ↓
   Sequence Diagram

5. WHAT states can an object have?
       ↓
   State Machine Diagram

6. WHAT major software components exist?
       ↓
   Component Diagram

7. WHERE do those components run?
       ↓
   Deployment Diagram
```

That's the **80/20 of UML** for a software engineer.

### One-line mental model

> **Use Case = Who does what**
> **Class = What exists**
> **Activity = What steps happen**
> **Sequence = Who talks to whom, and when**
> **State = How something changes state**
> **Component = What software pieces exist**
> **Deployment = Where those pieces run**
