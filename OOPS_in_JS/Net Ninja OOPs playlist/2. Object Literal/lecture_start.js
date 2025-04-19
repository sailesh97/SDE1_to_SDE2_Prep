// create user one
var userOneEmail = 'ryu@ninjas.com';
var userOneName = 'Ryu';
var userOneFriends = ["Yashi"];

// create user two
var userTwoEmail = 'yashi@ninjas.com';
var userTwoName = 'yashi';
var userTwoFriends = ["Ryu", "Mariou"];

// create user three
// create user two
var userThreeEmail = 'mario@ninjas.com';
var userThreeName = 'mario';
var userThreeFriends = ["yashi"];

function login(email){
    console.log(email, 'is now online');
}

function logout(email){
    console.log(email, 'has logged out');
}

function logFriends(friends){
    friends.forEach(friend => {
        console.log(friend);
    });
}
