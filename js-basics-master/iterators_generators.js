// Thursday, August 17, 2017 11:28:13 PM

// Object is an iterator
  // when it knows how to access items from a collection one at a time
  // while keeping track of its current position within that sequence

  // Iterator provides "next()" method, which returns next item in the sequence
  // The returnec object has two properties "done" and "value"

function chaalIterator(pritam) {
  var nextIndex = 0;

  return {
    next: function() {
      return nextIndex < pritam.length ? {value: pritam[nextIndex++], done: false} : {done: true};
    }
  };
}

var cp = chaalIterator(['chaal', 'pritam']);
console.log(cp.next().done);
console.log(cp.next().value);
console.log(cp.next().value);
console.log(cp.next().done);
