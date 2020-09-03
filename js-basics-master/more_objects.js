// Friday, August 11, 2017 11:10:09 PM

// Sunday, August 13, 2017 06:12:21 PM

console.log('////////////// USING OBJECT LITERAL TO CREATE A OBJECT //////////////////');
var userDetails = {name: {firstName: 'chaal', lastName: 'pritam'}, age: 27, location: 'vellore'};
console.log(userDetails);

// statement creates an objects and assigns to it
var chaal = 5;
if(chaal = 5) var x = {name: 'Chaal Pritam'};       // if statement true the object is created
console.log(x);

console.log('////////////// CONSTRUCTOR FUNCTION - TO CREATE A OBJECT //////////////////');
// Constructor function - another way to create objects (refer - objects.js object creation)
function userMobile(model, os, ram, version, versionName, rooted) {
  this.model = model;
  this.os = os;
  this.ram = ram;
  this.version = version;
  this.versionName = versionName;
  this.rooted = rooted;
}

var mobileOne = new userMobile('Moto G', 'Android', '1 GB', 7.1, 'Nougat', true);
console.log(mobileOne);
console.log(mobileOne['model']);
console.log(mobileOne['manufacturer']);  // undefined

var mobileTwo = new userMobile('Lenevo', 'Android', '', '', 'Lollipop', );
console.log(mobileTwo);
console.log(mobileTwo['model']);

console.log('////////////// ADDING //////////////////');
// Adding property
console.log(mobileOne['manufacturer']);
mobileOne['manufacturer'] = 'Google';
console.log(mobileOne);
console.log(mobileOne['manufacturer']);

console.log('////////////// DELETING //////////////////');
// Deleting property
console.log(mobileOne['manufacturer']);
delete mobileOne.manufacturer;
console.log(mobileOne['manufacturer']);

console.log('////////////// COMPARING //////////////////');
var chaalName = {name: 'chaal'};
var pritamName = {name: 'chaal'};

console.log(chaalName == pritamName);
console.log(chaalName === pritamName);

var chaalPritam = {name: 'chaal'};
var pritamChaal = chaalPritam;

console.log(chaalPritam == pritamChaal);
console.log(chaalPritam === pritamChaal);
