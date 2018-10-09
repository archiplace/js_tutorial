// strings
const name1 = 'Jeff';

const name2 = new String('Jeff');

console.log(name1);

console.log(typeof name2);

if(name2 == 'Jeff') {
  console.log('yes');
} else {
  console.log('no');
}

// Numbers

const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Boolean
const bol1 = true;
const bol2 = new Boolean(true);

//  Functions
const getSum1 = function(x, y){
  return x+y;
}

const getSum2 = new Function('x', 'y', 'return x+y');

console.log(getSum2(1, 2));

// Objects

const brad = {
  name: 'John',
  age: 33
}

const brad2 = new Object({name: 'John', age: 33});

console.log(brad2);

// Arrays

const arr1 = [1, 2, 3];
const arr2 = new Array(1,2,3);


// Regualar expressions
const rel1 = /\w+/;
const rel2 = new RegExp('\\w+');

console.log(rel2);


// generaly it slows down a little application so dont use constructurs for primitives