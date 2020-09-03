// Wednesday, August 16, 2017 03:35:07 PM

// Every object has a prototype and prototype is also an object
// Object inherit their properties and methods from their prototype

// Object created using - object literal (or) new Object(), inherit from a prototype "Object.prototype"
// All javascript objects(Date, Array, RegExp, Function, ...) inherit from "Object.prototype"

// Objects created using "new Date()" inherit from Date.prototype and this inherit from "Object.prototype"

console.log('////////////// CREATING A PROTOTYPE //////////////////');
// Using object constructor function to create an object prototype
function User(firstName, lastName, age, location) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.location = location;
}

// constructor function is the prototype for User objects

var firstUser = new User('Chaal', 'Pritam', 27, 'Vellore');
console.log(firstUser);

console.log('////////////// ADDING A PROPERTY TO AN EXISTING OBJECT //////////////////');
firstUser.designation = 'Android Developer';
console.log(firstUser);

console.log('////////////// ADDING A METHOD TO AN EXISTING OBJECT //////////////////');
firstUser.fullName = function() {
  return this.firstName + " " + this.lastName;
}
console.log(firstUser);
console.log(firstUser.fullName());

console.log('////////////// CANT ADD PROPERTIES TO A PROTOTYPE THRO THIS WAY //////////////////');
User.state = 'Tamil Nadu';
console.log(User);
console.log(firstUser);

console.log('////////////// ADDING PROPERTIES TO A PROTOTYPE //////////////////');
// Adding properties to already defined object
User.prototype.nationality = 'Indian';          // kinda default value
// Adding method to already defined object
User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
console.log(User);
console.log(firstUser);
console.log(firstUser.nationality);
console.log(firstUser.fullName());

// Prototype in layman's term
// We can't just add a property(nationality) to the function(User) above without changing function code
// We can use prototype to add some property(nationality) or method(fullName()) to function(User) w/o changing code

var secondUser = new User('Pritam', 'Chaal', 27, 'Vellore');
console.log(secondUser);
console.log(secondUser.nationality);            // getting nationality from prototype defined
console.log(secondUser.fullName());             // getting fullName from prototype defined

User.prototype.displayWelcomeMessage = function() {
  console.log('Hello, ' + secondUser.fullName());
};
secondUser.displayWelcomeMessage();
