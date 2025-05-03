#### Event propagation works the same way in React
1. When button is clicked, event object created at root of the node
![alt text](./lecture-16-part-2/1.%20events-in-react.png)
2. Event travels down till the target element
![alt text](./lecture-16-part-2/2.%20capturing-phase-in-react.png)
3. Event travels back to top through each parent of the target node.
![alt text](./lecture-16-part-2/3.%20bubbling-phase-in-react.png)

#### How events are registered in React?
If you see the right hand side of the images, we saw when we attach an event to a `button` in a React component, behind the scenes, it moves that event up and attaches it to the `#root` instead of adding it that actual `button` element.

#### How React make the best use of Event Delegation:
- React registers all event handler functions of all event types to the `#root` dom conatiner element. This is the same container in which the React App is displayed.
    - If you use the default CRA(Create-React-App) to create the React app, that's usually the div#root created for us on which we mount the app.
- React does alot behind the scenes to handle the events. But we can imagine, React physically registers one event handler function per event type and it does so at *the root node of the fiber tree*, during the render phase.
- So If we have multiple onClick handlers in our code in multiple elements, React will automatically bundle them all together and just add one big onClick handler to the root node of the fiber tree.
- So to summarize, React does event delegation behind the scenes and instead of handling the event at the target element where it actually happened, it actually handles the event at the #root div container.

All these are done just to achive some performance improvement.

#### How event objects work behind the scenes in React:

`<input onChnage={(e) => setText(e.target.value)}`

Whenever we declare an event handler like above, React gives us access to the event object that was created, just like Vanilla JavaScript applications. The `e` in `onClick` event in example above.

However in React this event object is actually different.

In vanilla JS, we simply get access to the native DOM event object. for example: PointerEvent, MouseEvent, KeyBoardEvent etc

On the other hand React will give us a Synthetic Event, which is basically a thin wrapper around the DOM's native event object.

These events are pretty similar to native event objects, but they just add/change some functionalities on top of them.

You'll have access to same functions those were available on native events like `stopPropagation` and `preventDefault`.

Note:
1. The major reason for React team building and exposing Synthetic event is to fix some browser inconsistencies, so that events work in the exact same way in all browsers.
2. React also decided to bubble most of the synthetic events including focus, blur and change, except for scroll. All these events were not bubbling in Native events. Scroll event is also doesn't bubble in React.

#### Event handlers in React vs Vanilla JS"
1. Attributes for event handlers are named using camelCase (onClick instead of onclick or click(element.addEventListeners))
2. Default behaviour can not be prevented by returning false in react. (Only by using preventDefault)
3. Attach "Capture" if you need to handle during capture phase (example: onClickCapture)

