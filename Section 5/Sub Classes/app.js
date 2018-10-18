class Persone {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

}

class Customer extends Persone {

  constructor(firstName, lastName, phone, membership) {
    // get from Persone class
    super(firstName, lastName);

    this.phone = phone;
    this. membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }

}

const john = new Customer("John", "Malkovich", '555-5555-555', 'standard');

console.log(john);

console.log(john.greeting());

console.log(Customer.getMembershipCost());