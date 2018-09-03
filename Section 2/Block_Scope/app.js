console.log('Hi there!!!');

// Global scope

var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope ', a, b, c);
}

test();

// block leve scope
if(true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('IF (block scope) scope ', a, b, c);
}

// FOOR LOOP
for(let b = 0; b < 5; b++) {
  console.log(`Loop b: ${b}`);
}

console.log('Global Scope ', a, b, c);