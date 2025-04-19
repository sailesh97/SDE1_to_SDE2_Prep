By Programming with Mosh: https://www.youtube.com/watch?v=jpegXpQpb3o&list=PL4508LH5a94U9t0nDOd8nSzlBG5jaNGzg&index=10&t=53s

The demerits we saw in `Object literals` can be solved using `Factory functions` or `Constructor functions`.

- Analogy: Just like a factory produces products, here factory function retuns objects.

#### Using object literal:
```
const userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

const userTwo = {
    email: 'sailesh@ninjas.com',
    name: 'Sailesh',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};
```

#### Using Factory functions:
```
const createUser(email, name){
    return {
        email, // new syntax
        name:name, // old syntax
        login(){ // new syntax
            console.log(this.email, 'has logged in');
        },
        logout: function(){ // old syntax
            console.log(this.email, 'has logged out');
        }
    }
}
```

- Here createUser is a factory function, where we just defined login & logout functions just once. So In case there's a bug in our function we just need to fix it in one place.
- Even though the function is defined at once, in memory a new instance of the function is getting created for each object returned from a `factory function`.
```
const useOne = createUser('a@gmail.com', 'abc');
const userTwo = createUser('b@gmail.com', 'bde');
console.log(userOne.login === userTwo.login); // false
Solution: Adding functions using proto

const a = [1,2];
const b = [3,4];
a.pop === b.pop // true
```
- function name convention for factory function is `Camel notation` (createUser)
- function name convention for constructor function in `pascal notation` (function Circle(){})

- There's workaround to solve the function duplication issue in factory function also. Without adding prototypes:
```
function getBirthYear(){
 // logic
}

function createUser(firstName, lastName, age){
    return {
        firstName, 
        lastName,
        getBirthYear,
    }
}
```