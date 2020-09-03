// Thursday, August 10, 2017 12:59:35 AM

// Function declaration
chaal();  // calling a function refered later

function chaal() {
  console.log('Hey Chaal');
}

// Function expression
// pritam(); // Type Error: pritam is not a function
var pritam = function() {
  console.log('Hey Pritam');
};
console.log(pritam);

// Function Scope
var firstName = 'Chaal' lastName = 'Pritam';

function userDetails() {
  var number = 7, age = 27,

  function userName(first, last) {
    return first + " " + last;
  }
  return userName(firstName, lastName);
}

userDetails();
