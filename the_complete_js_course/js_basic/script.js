/*********************************************
 * The Ternary operator and Switch Statements
 */
/*
 // Ternary operator
 let firstName, age, drink;

 firstName = "John";
 age = 16;BeforeUnloadEvent.

 age >= 18 ? console.log(`${firstName} drinks `) : console.log(`${firstName} drinks juice`);

 drink = age >= 18 ? 'beer' : 'juice';

 console.log(`${firstName} drinks ${drink}`);


 // Switch Statement
 let job;

 job = 'aaa';

 switch (job) {
  case 'teacher':
    console.log(`${firstName} teaches kids how to code.`);
    break;
  case 'driver':
    console.log(`${firstName} drives.`);
    break;
  case 'designer':
    console.log(`${firstName} draw.`);
    break;
  default:
    console.log(`${firstName} does not have a job.`);

 }

 */



/***************************************************
 *  Truthy and Falsy values and equality operators 
*/

// falsy value: undefined, null, 0, "", NaN
/*
let height;

height = 23;

if (height || height === 0) {
  console.log('Variable defined');
} else {
  console.log('Variable undefined');
}
*/

/*****************************
 * FUNCTIONS
*/

/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

console.log(calculateAge(1983));

let John = calculateAge(1990);
let Mike = calculateAge(1948);
console.log(John, Mike);

function yearsUntilRetirement(Year, firstName) {
  let age = calculateAge(Year);
  let retirement = 65 - age;
  console.log(`${firstName} retires in ${retirement} years`);
}

yearsUntilRetirement(1983, 'Dejan');
*/


/***************************************
 * Function Statements and Expressions
*/

/*
// Function declaration
// function whatDoYouDo(job, firstName) {}


// Function Expression => produces a result!!!
let wahtDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return `${firstName} teaches kids how to code.`;
    case 'driver':
      return `${firstName} drives.`;
    case 'designer':
      return `${firstName} draw.`;
    default:
      return `${firstName} does not have a job.`;  
  }
}

console.log(wahtDoYouDo('teacher', 'John'));
*/


/*******************
 * Arrays
*/

// add last in array => names[names.length] = 'value'; or names.push(value);
// add first in array => names.unshift(value);
// remove last in array => names.pop()
// remove first in array => names.shift()
// returns position in array => names.indexOf(element)
/*
let tips, bills;

function tip(bill) {
  if (bill < 50) {
    tips.push(bill * 0.2);
    bills.push(bill * 1.2 );
  } else if (bill >= 50 && bill < 200) {
    tips.push(bill * 0.15);
    bills.push(bill * 1.15 );
  } else {
    tips.push(bill * 0.1);
    bills.push(bill * 1.1 );
  }
}

tips = [];
bills = [];

tip(124);
tip(48);
tip(268);


console.log(tips, bills)
*/


/**
 * Objects and Properties
*/

/*
let john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
let x = john.birthYear;
console.log(x);

john.job = 'designer';
console.log(john);

let jane = new Object();

jane.firstName = "Jane";
jane.birthYear = "1969";
jane.lastName = "Mike";
console.log(jane);
*/

/**********************
 * Object and Methods
*/

/*
let john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(year) {
    return year - this.birthYear;
  }
};

john.age = john.calcAge(2019);

console.log(john);
*/

/*
let mark, john;

function person(fullName, mass, height) {
  return {
    fullName: fullName,
    mass: mass,
    height: height,
    calcBmi: function() {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  }
}

mark = person('Mark Smith', 98, 1.83);
john = person('John Malkovich', 76, 1.82);

john.calcBmi();
mark.calcBmi();

function whoDid(object1, object2) {
  if (object1.bmi > object2.bmi) {
    console.log(`${object1.fullName} has bigger BMI, ${object1.bmi}`);
  } else if (object1.bmi < object2.bmi) {
    console.log(`${object2.fullName} has bigger BMI, ${object2.bmi}`);
  } else {
    console.log(`${object1.fullName} and ${object2.fullName} has same BMI, ${object1.bmi}`);
  }
}

console.log(whoDid(john, mark));
*/

/**
 *  
*/
