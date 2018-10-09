// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDay = new Date(dob);
  /* this.calculateAge = function(){
    const diff = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  } */
}

// Calculcate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthDay.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}

// Get FUll name
Person.prototype.getFullName = function(){
  return this.firstName+' '+this.lastName;
}

// gets married
Person.prototype.getsMerried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', "Doe", '12/8/2005');
const dejan = new Person('Dejan', 'Rudic Vranic', 'June 2 1983');

console.log(dejan.getFullName());

dejan.getsMerried('Vasic');
console.log(dejan.getFullName());

console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('getsMarried'));