// /* 
//  * Log to concle
//  */
// console.log('Hello World');
// console.log(123);
// console.log(true);
// // array
// console.log([1, 2, 3, 4]);
// // object
// console.log({a: 1, b:2});
// console.table({a: 1, b:2});
// // error
// console.error('This is error');
// // worning
// console.warn('This is a warning!');
// // time
// console.time('Hello');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
//   console.log('Hello World');
// console.timeEnd('Hello');

// console.clear();



// /******************************************************
//  * var, let, const
//  *****************************************************/

// var name = 'John Doe';
// console.log(name);
// name = 'Stive Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // letters, number, _, $
// // Can't start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tome'; //Pascal case

// // LET
// let name = 'John Doe';
// console.log(name);
// name = 'Stive Smith';
// console.log(name);

// //CONST
// const name = 'John Doe';
// console.log(name);
// // name = 'Stive Smith';
// // console.log(name);
// // Have to assign a value
// // const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Dejan';

// console.log(person);

// const number = [1,2,3,4,5];

// number.push('Dejan');

// console.log(number);

// // PRIMITIVE
// // Strings
// const name = 'John';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefend
// let test;
// // Symbol
// const sym = Symbol();


// // REFERENCE
// // Array
// const hobbies = ['movies', 'music'];
// // Object Literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// // Dates
// const today = new Date();


// console.log(typeof today);
// console.log(today);


// let val;

// // Number to string
// val = String(5);
// val = String(4+4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date);
// // Array to string
// val = String([1,2,3,4,5]);

// // toString();
// val = (5).toString();
// val = (true).toString();

// // Strings to numbers
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');

// val = parseInt('100.3');
// val = parseFloat('100.3215');



// // output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(6));

// const val1=5;
// const val2=6;
// const sum = val1 + val2;

// console.log(sum);

// /***********************************************************
//  *  NUMBERS & MATH
//  ***********************************************************/

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;                   //2.718281828459045
// val = Math.round(2.8);          //3
// val = Math.round(2.4);          //2
// val = Math.ceil(2.4);           //3
// val = Math.floor(2.8);          //2
// val = Math.sqrt(64);            //8
// val = Math.abs(-3);             //3
// val = Math.pow(8, 2);           //64
// val = Math.min(5,35,76,4,5,-3); //-3
// val = Math.max(5,35,76,4,5,-3); //76
// val = Math.random();

// //Random number from 1 to 20
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);


// /*************************************************************
//  *  String Methods & Concatenation
//  *************************************************************/

// const firstName = 'Deeejan';
// const lastName = 'Vranic';
// const age = 35;
// const str = 'Heelo there my name is dejan';
// const tags = 'web design,web development, programming';
// let val;

// val = firstName + lastName;           // DeeejanVranic

// // Concatenation
// val = firstName + ' ' + lastName;     // Deeejan Vranic

// // Append
// val = 'Marko ';                       // Marko
// val += 'Polo';                        // Marko Polo

// val = 'Hello, my name is ' + firstName + ' and I am '+age+' years old.';

// // Template literals ES6 next video

// // Escaping
// val = 'That\'s awesome, I can\'t wait.';

// // Lenght
// val = firstName.length;                 // 5

// // concat
// val = firstName.concat(' ', lastName);  // Deeejan Vranic

// // Change case
// val = firstName.toUpperCase();          // DEEEJAN
// val = firstName.toLowerCase();          // deeejan

// val = firstName[0];                     // D

// // indexOf()
// val = firstName.indexOf('e');           // 1
// val = firstName.lastIndexOf('e');       // 3

// //charAt()
// val = firstName.charAt(2);              // e
// // Get last cahr
// val = firstName.charAt(firstName.length - 1); //n

// // substring()
// val = firstName.substring(0,4);         // Deee


// //slice()
// val = firstName.slice(0,3);             // Dee
// val = firstName.slice(-3);              // jan

// // split()
// val = str.split(' ');
// val = tags.split(',');

// //replace
// val = str.replace('dejan', 'Jack');     // Heelo there my name is Jack

// // includes()
// val = str.includes('dejan');            // true
// val = str.includes('foo');              // false

// console.log(val);


// /********************************************************************
//  * Template Literals
//  ********************************************************************/

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template literals (es5)
// html = '<ul>' +
//         '<li>Name: '+name+'</li>' +
//         '<li>Age: '+age+'</li>' +
//         '<li>Job: '+job+'</li>' +
//         '<li>City: '+city+'</li>' +
//         '</ul>';

// // with template literals (es6)

// function hello(){
//   return 'Hello World!';
// }

// html = `

//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${3+43*Math.PI}</li>
//     <li>${hello()}</li>
//     <li>${age > 40 ? 'Over 40' : 'under 40' }</li>
//   </ul>

// `;

// document.body.innerHTML = html;


// /************************************************************
//  * Arrays
//  ************************************************************/

// //  Create some arrays
// const numbers = [43, 56,33,46,5,124,4,76,361,1000];
// const numbers2 = new Array(22,54,78,9,13);
// const fruit = new Array('Apple', 'Bananas', 'Kruska', 'Ananas');
// const mixed = new Array('Dejan', 35, true, undefined, null, {a:1, b:2, c:'Vranic'}, new Date());

// let val;

// // Get array lenght
// val = numbers.length;
// // Check to see if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// // Insert into array
// numbers[2] = 666;
// // Find index of a velue
// val = numbers.indexOf(124);

// // MUTTATING ARRAYS
// // Add to the end of array
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from start
// numbers.shift();
// // Splice values
// numbers.splice(1,2);
// // Revers
// numbers.reverse();

// // Concatenate arrays
// val = numbers.concat(numbers2);

// // Sorting array
// val = fruit.sort();
// val = numbers.sort();
// // Use "compare function"
// val = numbers.sort(function(x, y) {
//   return x - y; 
// })
// // Revers sort
// val = numbers.sort(function(x, y) {
//   return y - x;
// })
// // Find
// function under50(num) {
//   return num < 50;
// }
// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

// /***********************************************************************
//  * Object Literals
//  **********************************************************************/

//  const person = {
//    firstName: 'Stive',
//    lastName: 'Smith',
//    age: 35,
//    email: 'stive@aol.com',
//    hobbies: ['music', 'sports'],
//    address: {
//      city: 'Miami',
//      state: 'FL'
//    },
//    getBirthYear: function(){
//      let currentYear = new Date();
//      return currentYear.getFullYear() - this.age;
//    }
//  };

//  let val;

//  val = person;
// //  Get specific value

// val = person.firstName;
// val = person.address.state;
// val = person.getBirthYear();

//  console.log(val);

// /********************************************************
//  * Dates & Times
//  ******************************************************/

//  let val;

//  const today = new Date();
//  let burthDay = new Date('6-2-1983');
//  burthDay = new Date('September 10 1981');

//  val = today;
//  val =today.getMonth();
//  val = today.getDay();
//  val = today.getTime(); // get time stampe

//  console.log(val);


/**
 * If Statements & Comparison Operators
 */

//  if(something) {
//    do something
//  } else {
//    do something else
//  }

const id='100';

// EQUAL TO
// if(id == 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }


// // NOT EQUAL TO
// if(id != 101){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // EQUAL AND SAME TYPE
// if(id === 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL AND SAME TYPE
// if(id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'corect' : 'incorect');


// const color = 'yellow';

// switch(color) {
//   case 'red' :
//     console.log(`Color is RED`);
//     break;
//   case 'blue':
//     console.log(`Color is BLUE`);
//     break;
//   default:
//     console.log(`Color is not red or blue but ${color}`);
//     break;
// }

// let day;

// switch(new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);

// /********************************************************
//  * FUNCTIONS!!!!
//  ********************************************************/

// // 1. Function declarations
// function greet() {
//   // console.log('Hello!');
//   return 'Hello';
// }

// console.log(greet());

// function hi(firstName = 'Dejan'){
//   // Define default ES5''
//   // if(typeof firstName === 'undefined') {firstName='Dejan'}
//   return `Hello ${firstName}, how are you today?`;
// }

// console.log(hi());

// // 2. Function Expresions
// const square = function(x) {
//   return x*x;
// };

// console.log(square(8));

// // IMMIDAIATELY IVOKABLE FUNCTION EXPRESION - IIFEs
// (function(x) {
//   console.log(`Hey all ${x}`);
// })('Dejan');

// // PROPRETY METHODS

// const todo = {
//   add: function(x='Marko'){
//     console.log(`add todo...${x}`);
//   },
//   edit: function(id){
//     console.log(`Edit to do ${id}`);
//   }
// }

// todo.add('E sada je dosta zajebavanja!!!!');
// todo.edit('22');


/***********************************************************
 * Genral Loop
 ***********************************************************/

// FOR LOOP

// for(let i=0; i <= 10; i++) {
  
//   if (i == 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i==5) {
//     console.log('stop the loop');
//     break;
//   }
//   console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }

// DO WHILE

// let i = 20;
//  do {
//    console.log('Number ' + i);
//    i++;
//  }
//  while(i < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford', 'Honda', 'Toyota', 'Chevy'];

// for(let i=0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 5, name: 'Dejan'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }