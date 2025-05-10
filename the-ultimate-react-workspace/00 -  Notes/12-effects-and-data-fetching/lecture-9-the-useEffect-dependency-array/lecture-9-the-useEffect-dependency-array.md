### What's useEffect dependency array?
![alt text](./lecture-9-images/1.%20deps%20array.png)

Important: *By default, effects run **after every render**. We can prevent that by passing a dependency array.*

### useEffect is a synchronization mechanism:
![alt text](./lecture-9-images/2.%20one%20way%20synchronization.png)

updating the state will trigger the useEffect callback to run. In example above the callback updates the document title. 
But If you update document title directly from devtools, it won't make chaneg to title state variable we've created in code. 
*So useEffect is one-way street synchronization mechanism.*

### Synchronization & Lifecycle:
![alt text](./lecture-9-images/3.%20avatars%20of%20deps%20array.png)
Focus on lifecycle column for 3 avatars of deps array in image above.


### When are effects executed?
### Phase-1 (Initial Render)
![alt text](./lecture-9-images/4.%20When%20effects%20are%20executed%20-%20Initial%20Render%20Phase.png)

Misconception: Effect are run after every render. 

It's fully wrong though. But to be exact, effects are after the render+commit+browser paint of intial render, during *initial render phase (phase-1)*.

Reason: 
- Effects may contains long-run process to fetch data. If we run it before browser paint, it will block the entire process.
- If effect sets state, it will require additional rendering.

### Phase-2 (Re-render)
![alt text](./lecture-9-images/5.%20when%20effects%20are%20executed.png)

During phase2(re-render):
Let say a prop/state of component updates, which will trigger re-render.
Component will go thorugh: re-render+commit+browserpaint again and effect will run only after browser paint like before.
But during re-render, there's another hook to run custom code between commit and browser paint phase, i.e `useLayoutEffect` 

### Phase-3 (Unmount):
Finally useEffect also runs when component is unmounted from react component tree.

Note: During the lifecycle timeline, we have kept a placeholder to discuss more later.( During re-render & unmount phase )

This is discussed in Lecture: 15. : Cleanup Functions, which gets called in re-renders and also when the component is about to unmount.

### Example:
```
export default function App(){
    useEffect(function(){
        console.log("A");
    }, []);

    useEffect(function(){
        console.log("B");
    });

    console.log("C");
}
```

Output:
```
Initial render:
C
A
B

Re-render:
C
B
```


Example-2
```
useEffect(() => {

}, [x])
```
The above useEffect is synchronized with x.

#### Race condition:
https://www.youtube.com/watch?v=_4Kjw_VVPHA

Let say we make API calls on each keystroke and and the save the response from API in a state variable.

Let say we typed 3 charcters which led to 3 api calls. 

If we typed, "cat",
1st api call will be for: "c"
2nd api call will be for: "ca"
3rd api call will be for: "cat"

What If response for "cat" came first and we update our state variable as per the response.
And then later we receive response for "c". In this scenario, it'll update the state variable with response of a wrong input value.

The correct approach would be, cancel the previous api calls, before calling a new one.

In this scenario, when I type "ca", it should cancel api call for "c".
If typed "cat", should cancel api call triggered for "ca".

Here there's a race between api calls triggered for "c", "ca" & "cat".

Solution: 
https://codepen.io/Learnersbucket/pen/wvQGWzb

```

const getRandomTime = () => Math.floor(Math.random() * 3000);

function getRandomData(data) {
 return new Promise((res, rej) => {
   const time = getRandomTime();
   setTimeout(() => {
     res(data);
   }, time);
 });
}

const App = () => {
    const [searchText, setSearchText] = useState('');
    const [result, setResult] = useState('');

    const onChange = (event) => {
       const { value } = event.target;
       setSearchText(value);
    }

    useEffect(() => {
        let flag = true;
        getRandomData(searchText).then((val) => {
            if(flag){
            setResult(val);
            }
        });
        
        return () => {
            flag = false;
        }
    }, [searchText]);

    return (
        <div className="App">
            <input name="search" placeholder="search" value={searchText} onChange={onChange} />
            <div>{result}</div>
        </div>
    );
}
```

In above solution, we created a closure of getRandomData with flag variable. Now we update state ( `setResult`) only If flag is true.

We're accessing flag in cleanup function and make it false in cleanup.

Whenever new char added in input, it'll update searchText state var and it will re-render. During re-render, cleanup func of useEffect will be called and flag will be false. So even if api call completes, as flag is false, it won't update the state.

In Lecture 15 we discssed how to solve this using AbortController.