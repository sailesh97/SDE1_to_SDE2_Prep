![](./lecture-5-images/1.%20where%20to%20call%20effects.png)

Rules:
1. Do not call effects inside render logic. It'll lead to infinite re-renders, when we try to save response from side effect in a state variable.
2. Effects can be placed at two places:
    1. Event handlers : To communicate to outside world, when user events
    2. Useeffects: To communicate to outside world at different stages of a component (mount, re-renders or unmount)

#### Events v s Effects
![alt text](./lecture-5-images/2.%20Events%20vs%20Effects.png)

As per the image:
1. Preferred way of creating effects is using event handlers. (than creating using useEffects)
2. useEffect is a way to synchronize react app with the external world.
3. useEffect has 3 parts:
    1. Effect function
    2. Cleanup function
    3. Dependency array

    By configuring these 3 we can hook into different stages of a component instance's lifecycle and communicate to outside world to keep our app synchronized with outside world.