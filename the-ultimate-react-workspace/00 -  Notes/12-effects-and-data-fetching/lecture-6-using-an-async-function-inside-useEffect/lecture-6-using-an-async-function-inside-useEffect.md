Goal: Let's now convert our effect to an async function instead of the basic promise handling that we did in lecture-4 in usePopcorn project.

#### But we can't directly use async to the callback we pass to useEffect. Doing so, will show this warning saying: "Effect callbacks are synchronous to prevent race conditions. Put async function inside".

![alt text](./lecture-6-images/1.%20Wrong%20way-making%20callback%20passed%20to%20useEffect%20as%20async.png)
![alt text](./lecture-6-images/2.%20Warning%20by%20React.png)

Correct way to do async work inside useEffect is to define a async function inside the callback we pass to useEffect and call it inside the callback itself.

![alt text](./lecture-6-images/3.%20Correct%20way%20of%20doing%20async%20stuffs%20inside%20useEffect.png)

My view: It's not mandatory to define the fetchMovie function inside the useEffect. You can define it outside the useeFfect, call it inside the effect, but make sure all states & props used inside fetchMovies should be there in deps array in useEffect.


Lecture 7 & 8 is about adding a loading state to show loader when data is not fetched from API and to handle error If API fails.