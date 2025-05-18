### What a react hook actually is and how they work?
1. React hooks are special functions built into React, which allow us to basically hook into React's internal mechanisms.
2. In technical terms, hooks are basically APIs that expose some internal react functionality such as accessing state from fibre tree or registering side effects in the fibre tree as well.
    - Fibre tree is present somewhere deep inside React and usually not accesible to us. Only way to get access to Fibre tree is through hooks.
3. Hooks also allow us to manually select and store DOM nodes, access context and many other things.
4. All react hooks start with "use" in order to make it easy for us and for React to distinguish hooks from other regular functions.
5. We can also create our own custom hooks. Custom hooks gives us developers an easy way of reusing non-visual logic. Non-visual logic means logic that is not about the UI.
6. In older react versions, to provide state to component, it was mandatory to create a class based component. But with hooks, now in newer React versions, even functional components have the ability to own state and run side effects.
![](./lecture-2-images/1.%20what_are_hooks.png)

### Overview of All Built-in Hooks:
![alt text](./lecture-2-images/2.%20Overview+of+all+built+in+hooks.png)

### The rules of hooks:
In order for hooks to actually work as intended, there are two very simple rules of hooks that we must follow:
1. First rule:
    - Hooks can only be called at top level
        - In practice that means we can't call hooks inside conditionals, loops or nested functions
        - or after an early return.
    - Reason: It's because hooks only work If they are always called in the exact same order. which can only be ensured If we call them at the top level.
2. Second rule:
    - Hooks can only be called from inside of a React functions.
    - In practice this means that hooks can only be called from function components or from custom hooks. But not from regular functions or class based components.

The great news is that you actually won't have to worry about these rules at all, If you're using a linter. Because these two rules are automatically enforced by React's ESLint rules.
![alt text](./lecture-2-images/3.%20Rules+of+hooks.png)

### Why React enforces the first rule to use hooks at the top level:

#### Hooks rely on call order:
We'll see why do hooks need to be called in the same order on every render?
![alt text](./lecture-2-images/4.%20why+react_enforces+first+rule.png)

1. Whenever an application is rendered, react creates a tree of react elements, also called Virtual DOM.
2. On intial render, React also creates a Fiber tree, out of the virtual dom, where each element is a fiber.
3. Each of these fibers contains a lot of stuff line the received props, a list of work and crucially a linked list of all the hooks that were used in the component instance.
4. In example imag above we illustrated a linked list of used hooks in a hypothetical code example, where we're intentionally breaking the rule#1 of hooks.
5. As shown in code example and linked list is built based on the call order of the hooks in code example.
6. But when state A is updated, the first node of the linked list is loosing reference to second node (State B). and after re-render the linked list is broken as State A points to nothing.
7. Imp: As fibers are not created on every render, so is the linked list. And that's why the rule# 1 is important in React hooks. So that the order of nodes in linked list created inside fiber of a component remains same even after multiple re-renders.

#### Why React didn't use any other data structure for storing the list of hooks inside Fiber?
Qs: The obvious question, we could get rid of this strange rule#1, If React considered some other data structure to store this info of list of hooks in a component.

Ans: Do you see in image how the first state is marked as 1, second state as 2 and so on. If you inspect your react component in React Devtools, you'll see a number associated with each hook in the same order as you write in code.

Reason:
Let say you have 3 states: loading, error and data state. Based on response from some API, these state values change.
Now in your code you named the state as "loading", but how do react store this info? 
Does react create a variable name for each state it encounters in your code inside the Fiber? Answer is no.
React uses the order as a way to distinguish the state.

For you the state name is "loading", for react fiber, to access the state it will traverse through the linked list and look for the state at order# 1.

By this way React developers get rid of the problem of assigning name to each state you create in your code.

## Lecture-3 The Rules of Hooks in Practice:
Showing how the hooks are numbered in React Dev tools:
Both useState & useEffect hooks
![alt text](./lecture-3-images/1.%20practice.png)

Let's break the rule, refer to line# 263 in image below:
![alt text](./lecture-3-images/2.%20error+breaking_rule_num+1.png)

Check the error message saying the `order of hooks called by MovieDetails is different in Previous render and next render.`

Note: /* eslint-disable */ to disable eslint.

#### Another example of breaking rule#1 by an early return:
![alt text](./lecture-3-images/3.%20early+return.png)

At line# 265, we're returning early from the component. But there's a hook mentioned at line# 282.

So in intial render hook mentioned in line#282 was considered to create the linkedlist for list of hooks, but no state update as we're returning from line#265 during re-render, the hook present in line282 is missing in linkedlist and hence React is complaining.
