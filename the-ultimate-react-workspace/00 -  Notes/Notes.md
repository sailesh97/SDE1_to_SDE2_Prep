#### Section 6: State, Events and Forms Interactive Components, Lecture 6: Don't set state manually
```
export default function App(){
    const [test, setTest] = useState({name: "jonas"});
    
    function handleOnClick(){
        test.name = 'Sailesh'; // It will work and update the state to 'Sailesh', but it's a bad practice.
    }

    return (
        <>
            <button onClick={handleOnClick}>Test</button>
            <span>Name is: {test.name} </span>
        </>
    );
}
```

#### Lecture 17: Building a Form:

Form behavior in HTML:
- If there's a input:text and you click enter in textbox, it'll trigger a submit event on the form
- Similarly If you click on button, submit event will be triggered, even when there's no click listener for button in below snippet.
    - that's because the default type property in "button" component is "submit".
    - Other values for type property of button can be: 'button' or 'reset'
```
function handleSubmit(e){
    e.preventDefault(); // to not trigger api call
}
<form onSubmit={handleSubmit}>
    <input type="text" />
    <button> Submit </button>
</form>
```
Great question!
---

### Button types and their effect in a form:

1. **`type="submit"`** (default if no type is provided)
   - Submits the form.
   - Triggers the form's `onSubmit` event.

2. **`type="button"`**
   - Just a clickable button.
   - **Does not** submit the form.
   - **Does not** trigger `onSubmit`.

3. **`type="reset"`**
   - Resets all form fields to their default values.
   - Also does **not** trigger `onSubmit`.

---

### Example:

```html
<form onsubmit="return handleSubmit(event)">
  <input type="text" name="name" />
  
  <button type="button">Click Me</button> <!-- Does NOT trigger onSubmit -->
  
  <button type="submit">Submit</button>   <!-- Triggers onSubmit -->
</form>
```

#### Lecture 18: Controlled Elements:
When we used to work with form elements in vanilla JS these form elements userd to maintain their state **inside the dom** by default.

Like the value property in input, type="text" or in a select element.

Now this makes it hard to read the values, directly from the DOM html elements or on updating the text in input fields it updates & stores in HTML element only.

To get rid of DOM from controlling and to hand over the control to React, we create a state variable and assign to HTML element's value property and add a onChnage listener, which will update the state tied to value prop of HTML element.

```
function App(){
    const [text, setText] = useState("");
    return (
        <input type="text" value={text} 
            onChange= (e) => {
                setText(e.target.value);
            } 
        />
    )
}
```
#### Lecture 19: State vs Props
State:
1. Internal data owned by the components
2. Component's memory. Persist over re-renders
3. Updating state causes component to re-render
4. Used to make components interactive

Props:
1. External data, owned by parent component
2. Similar to function parameters
3. Read-only
4. Receiving new props causes components to re-render. Usually when parent's state has been updated.
