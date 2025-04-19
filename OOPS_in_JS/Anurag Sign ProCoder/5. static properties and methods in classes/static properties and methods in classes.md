Static properties are only accessible using class name and not on instance name.

```
class User {
    static demo = 'demoValue'
    static getBirthYear(){
        return 'xyz';
    }
}
User.demo; // returns demoValue
const user1 = new User();
user1.demo; // undefined
User.getBirthYear() // returns xyz
user1.getBirthYear(); // undefined
```

### Static blocks:
```
class User{
    static{
        console.log('abc'); // allowed here
        demo = 'demoValue'; // will be a static variable
        console.log(this);
        this.getFullName = function(){
            
        }
    }
}
console.log(User.demo) // demoValue
```
this inside static block will be `User` class
this inside member function will be the individual user object.