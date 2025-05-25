Selecting a dom element using a ref:
3 Steps process:

1. Creating a ref: `const inputRef = useRef(null)`
2. Attaching ref to DOM: `return <input
        type="text"
        ref={inputRef}
    />`
3. Accessing the ref: ```useEffect(function(){
    inputRef.current.focus();
},[])```