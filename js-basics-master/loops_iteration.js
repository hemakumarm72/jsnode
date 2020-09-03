// Thursday, August 10, 2017 11:50:07 AM

// for statement
for (var me = 0; me < 5; me++) {
  console.log('chaal');
}

// while statement
var i = 0;
while (i < 5) {
  console.log('pritam');
  i++;
}

// do-while statement
var ok;
do {
  ok += 1;
  console.log(ok);
} while (ok < 5);

// labeled statement
d = 0;
chaalLoop:                // this is label
while (d < 2) {
  console.log('Hey...');
  d++;
}

// break statement
for (var me = 0; me < 5; me++) {
  console.log('chaal');
  if (me == 3) {
    break;
  }
}

// continue statement
var c = 0, p = 0;
while (c < 6) {
  c++;
  console.log('C after increment ' + c);
  if (c == 3) {
    console.log('C inside if ' + c);
    continue;
  }
  p += c;
  console.log('P after incrementing c ' + p);
}

// breaking to a label
var a = 0, b = 0;
labelCancelLoop:
while (true) {
  console.log('Outer loops : .. Chaal .. : ' + 'Loop ' + a);
  a += 1;
  b = 1;
  while (true) {
    console.log('Inner loops : .. Pritam .. : ' + b);
    b += 1;
    if (b === 5 && a === 5) {
      break labelCancelLoop;
    } else if (b === 7 ){
      break;
    }
  }
}

// continuing to a label
var chaal = 0;
var pritam = 10;
checkChaalandPritam:
  while (chaal < 5) {
    console.log(chaal);
    chaal += 1;
    checkPritam:
      while (pritam > 5) {
        console.log(pritam);
        pritam -= 1;
        if ((pritam % 2) == 0) {
          continue checkPritam;
        }
        console.log(pritam + ' is odd.');
      }
      console.log('chaal = ' + chaal);
      console.log('pritam = ' + pritam);
  }

// for...in statement
function chaalPritam(data, dataName) {
  var result = '';
  for (var i in data) {
    result += '\n' + dataName + '.' + i + ' = ' + data[i];
  }
  return result;
}

var data_input = {model:'Moto G', os:'Android - Nougat'}
var data_input_name = 'mobile'
console.log(chaalPritam(data_input, data_input_name));

// for...of statement
var chaalNumbers = [5, 8, 9, 2];
chaalNumbers.name = 'chaal';

for (var pritam in chaalNumbers) {
  console.log(pritam);
}

for (var chaal of chaalNumbers) {
  console.log(chaal);
}

console.log(chaalNumbers);
