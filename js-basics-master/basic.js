// Tuesday, August 08, 2017 06:10:49 PM

// Types
  // Number
  // String
  // Boolean
  // Symbol (ES2015)
  // Object
    // Function
    // Array
    // Date
    // RegExp
  // null
  // undefined

// Variables
var userName;
console.log(userName);

userName = 'chaal';
console.log(userName);

var username = 'pritam';
console.log(username);

userName = 'chaal pritam';
console.log(userName);

// Variables with different data types
var userAge = '27';
console.log(userAge);

var isUserCode = true;
console.log(isUserCode);

var userLocations = ['Vellore', 'Chennai', 'Bangalore'];
console.log(userLocations[0]);
console.log(userLocations[1]);
console.log(userLocations[2]);
console.log(userLocations[3]);

var userDetails = ['Chaal', 'Pritam', 27, true, 'Vellore'];
for (var i = 0; i < userDetails.length; i++) {
  console.log(userDetails[i]);
}

// Changing datatype of variable by changing value
var me = 'Chaal Pritam';
console.log(me);
me = 27
console.log(me);
me = false;
console.log(me);
me = ['chaal', 'pritam']
console.log(me);

// Object
/*
the querySelector can only be used when script running on browser
using query selector to select h1 html tag
storing the selected object in myVariable
*/

// var myVariable = document.querySelector('h1');
