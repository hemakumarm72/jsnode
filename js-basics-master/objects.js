// Friday, August 11, 2017 05:37:52 PM

// Object is a collection of properties(with key and value)
// var object = {key: value, key: value}
// Almost everything is an object in javascript
// objectName.propertyName

// Objects in other languages
  // Associative arrays in PHP
  // Dictionaries in Python
  // Hash tables in C
  // Hash maps in Java
  // Hashes in Ruby and Perl

// Objects creation using different ways
  // Using an object literal
  // Using new keyword
  // Using Constructor
  // Using Object.create()   // ECMAScript 5

console.log('////////////// CREATING OBJECT USING NEW KEYWORD //////////////////');
// Creating a object
var myMobile = new Object();
myMobile.model = 'Moto G';
myMobile.os = 'Android';
myMobile.ram = '1 GB';
myMobile.version = 7.1;
myMobile.versionName = 'Nougat';
myMobile.rooted = true;

console.log('////////////// ACCESSING OBJECT //////////////////');
// Accessing
console.log(myMobile);
console.log(myMobile['model']);
console.log(myMobile['manufacturer']);  // undefined

console.log('////////////// EXAMPLE TO ASSIGN IN MANY WAYS //////////////////');
// Example on how can we assign anything to object
var chaalObject = new Object(), name = 'your name', randomNumber = Math.random(), pritamObject = new Object();

console.log(chaalObject);
console.log(name);
console.log(randomNumber);
console.log(pritamObject);

chaalObject.designation = 'Developer';
chaalObject['date created'] = new Date();
chaalObject[name] = 'chaal pritam';
chaalObject[randomNumber] = 'hjhj';
chaalObject.generate = Math.random();
chaalObject[''] = 'This is empty string ';
chaalObject[pritamObject] = 'hbh';
pritamObject.firstName = 'first name';
pritamObject.lastName = 'last name';
chaalObject[pritamObject.firstName] = 'chaal';
chaalObject[pritamObject.lastName] = 'pritam';

console.log(chaalObject);
console.log(pritamObject);
console.log(chaalObject[pritamObject]);
console.log(chaalObject[pritamObject.firstName]);
