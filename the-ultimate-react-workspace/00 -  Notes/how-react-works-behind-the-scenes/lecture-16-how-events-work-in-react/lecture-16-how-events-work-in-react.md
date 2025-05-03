In this lecture we'll learn how React handles events and how they work behind the scenes.

But before going into **how React does this**, let's start with understanding **how event propagation and event delegation work in the DOM**?

### DOM Refresher: Event Propagation and Delegation:

1. Event created at top node of the DOM
![alt text](./lecture-16-images/1.%20Event%20Created%20at%20Top%20Node.png)

2. Event travel down to node where the event actually happened:
![alt text](./lecture-16-images/2.%20Event%20travels%20down%20to%20target%20element.png)

3. Bubling phase:
![alt text](./lecture-16-images/3.%20Bubling%20phase.png)

#### Understanding the above 3 phase:
1. We're discussing about DOM and Vanilla JS and not about React or Fiber tree in first half of this lecture.
2. In the DOM tree shown above, when we click one of the bottom most `button`, an event is created.
3. As soon as the event fires, an event will be created. But it will not be created where the click actually happened. Instead it will be created at the root of the very top the tree.
4. From the top, then the event will travel down the entire tree, during the so called `Capturing phase`, until it reaches the target element.
5. The target element is the element where the event was actually first triggered.
6. At the target, we can choose to handle the event, by placing an event handler function. This is what we do in most of the cases to handle the event.
7. But the story doesn't end here. Then from target element, the event object will travel up to the top, all the way the entire tree. This is called the `Bubbling phase`.
8. This whole process of event travelling down till target from top node and again travelling back to top node from target node is called `Event Propagation`.

#### Important things to remember:
1. During both Bubbling and Capturing phase, the event travels through each parent and child element one by one. It behaves as if the event originated or happened in each of these DOM elements.
2. Every single event handler in a parent element will also be executed during the bubbling phase as long as the parent elements of target are also listening for the same type of event.
3. By default, event handlers listen to events on the *target and during the bubbling phase.*
    - Example: If I attach a click listener in bottom most `button` and `div.options`. and we clicked the `button`. The click listener on the `div.options` will be called just once during bubbling phase only, and not during capturing phase. Even though the event travels through the `div.options` twice.
    - Sometimes we don't want this behaviour and only want that event listener to execute on which the event was actually happened. In our example it's the `button` element.
    - To prevent the event bubbling, we can do `e.stopPropagation()`

Now as we understand the event propagation, let's discuss what is event delegation is Browser DOMs:

#### Event Delegation:
The fact that events bubble like this allows developers to implement a very common and useful technique called `Event Delegation`.

Event delegation is about handling events for multiple elements centrtally in one single parent element.

Better for performance and memory, as it needs only one handler function.

- Not using event delegation
![alt text](./lecture-16-images/4.%20Not%20using%20event%20delegation.png)
Imagine that instead of three buttons, `div.options` is having 1000 of buttons. Now If we want to handle events on all of them, each button would have to have its own copy of the event handler function, which could be problematic for the app's performance and memory usage.



- Using event delegation

![alt text](./lecture-16-images/5.%20Using%20Event%20Delegation.png)

Instead using event delegation, we can simple add just one event handler function to the first parent element of all those `button` elements.

In this example, as shown in the image, we can identify the target element as well, in parent element inside the event handler using `e.target`


This technique of event delegation is very common in vanilla Javascript applications. However in React apps, it's actually not so common for us to use this technique. Because event delegation does not work the same way in React.

Now as we have knowledge about how events are handled in vanilla JS and Browser DOM trees, let's compare how this process differs in React and how React handles the events.

