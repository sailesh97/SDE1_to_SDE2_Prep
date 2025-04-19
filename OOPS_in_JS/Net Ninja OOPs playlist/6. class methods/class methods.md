How to add login & logout functions in class?

- Not inside contructor, but inside the class

```
class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just loggedin');
    }
    logout(){
        console.log(this.email, 'just loggedout');
    }
} 

const user = new User('ryu@ninja.com', 'ryu');
user.login();
```