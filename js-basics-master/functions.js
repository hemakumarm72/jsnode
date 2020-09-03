// Tuesday, August 08, 2017 08:48:18 PM

var numOne = 10;
var numTwo = 20;

function add(varOne, varTwo ) {
  var result = varOne * varTwo;
  console.log(result);
}

add(numOne, numTwo);

// Function with a return value
function name(firstName, lastName) {
  var userName = firstName + " " + lastName;
  return userName;
}

console.log(name('chaal', 'pritam'));

// Anonymous function
// Function without a name and assigned to some variabe
var chaal = function(firstName, lastName) {
  var userName = firstName + " " + lastName;
  return userName;
}

console.log(chaal);
console.log(chaal());
console.log(chaal('chaal', 'pritam'));
var pritam = chaal('pritam', 'chaal');
console.log(pritam);

// Calling a anonymous function
(function() {
  console.log('Anonymous function');
})();

// Passing a argument in anonymous function
(function(firstName, lastName) {
  console.log(firstName + " " + lastName);
})('chaal', 'pritam');

// Funtion with object properties
function meChaal(cp) {
  cp.lastName = 'Pritam';
  console.log(cp);
}
var meVar = {firstName: 'Chaal'};
meChaal(meVar);

// Function defined based on Conditions
num = 5;
if (num == 5) {
  var chaalFun = function(arg) {
    arg.newMobile = 'Moto G';
    console.log(arg);
  }
  var me = {oldMobile: 'lenovo'}
  chaalFun(me);
}
