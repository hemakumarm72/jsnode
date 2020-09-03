// Thursday, August 10, 2017 01:12:08 AM

const PI = 3.14;

// PI = 5;  // cannot assign/change value to constant

console.log(PI);
(function() {
  console.log(PI * 2);
  // PI = 5;  // cannot assign/change value to constant
  console.log(PI);
})();


// cannot declare a constant with the same name as a function
function chaal() {};
// const chaal = 10;  // SyntaxError


// cannot declare a constant with the same name as a variable
function pritam() {
  const pritam = 20;
  console.log(pritam);
  // var pritam;  // SyntaxError
}
pritam();


// Properties of objects assigned to Constants
const CHAAL_PRITAM = {'firstName': 'chaal'};
CHAAL_PRITAM.lastName = 'pritam';
console.log(CHAAL_PRITAM);
