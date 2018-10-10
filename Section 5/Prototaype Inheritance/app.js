// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("John", "Doe");

console.log(person1.greeting());


// Customer constructor
function Customer(firstName, lastName, phone, mebership) {
  // call is a function to call other function
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.mebership = mebership;
}

// Inherite the Persone prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Cusotmer.prototype return Customer
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}, and welcome to our company!`;
}

// Create customer
const customer1 = new Customer("Dejan", "Rudic", "+381 60 600 600", "premium");



console.log(customer1.greeting());
console.log(customer1);