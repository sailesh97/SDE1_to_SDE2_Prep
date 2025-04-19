Requirement: I want to create an admin user who has access to delete any user. I want all properties & methods to an admin object as well. But don't want a normal user to delete another user
Solution: Easy when used classes, Inheritance.

```
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');
admin.login();

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);
```