This lecture about initial state we pass in useState:
The initial state we pass to useState matters only for the *initial render*

![alt text](./lecture-4-images/1.%20initial+value+passed+to+useState.png)

In pic above, we have added a condition as inital value to useState.
So this condition will be executed for the first time when the component mounts. and on corresponding re-renders, this condition won't get executed and the value of isTop will be picked from the fiber of the component it belongs to.

If you want to setIsTop based on imdbRating in initial render and all corresponding re-renders, that can be achieved using useEffects.
![alt text](./lecture-4-images/2.%20syncing%20state%20usong%20useEffect.png)

In MovieDetails component, when it mounts for first time, `imdbRating` will be undefined. After initial render of MovieDetails, we fetch the movie details from an API and then from movie object we destructure the value of imdbRating.

As imdbRating was undefined in first render, isTop state will be false. Now once the movie data is fetched from API, we store that info in a state and component is re-rendered again and this lead to update in value of imdbRating. Now even though imdbRtaing is 9 in 2nd render, useState won't consider its value to determine based on new value of imdbRating.

But in this situation, even the we're able to solve problem using isTop state + useEffect, we don't need a state at the first place.

isTop can be a derived state and an optimal solution in this case.
Like this:
`const isTop = imdbRating > 8`


The second half of the video is to show that setState is asynchronous.
```
const [A, setA] = useState(0);

function updateA{
    setA(1);
    setA(A + 2); // At this point value A is still 0 and not 1 as the previous line is async.
}
```

Solution: Use callback syntax while updating the state.
`setA(prevA => prevA + 1)`