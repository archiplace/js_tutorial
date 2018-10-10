class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthDay;
    // console.log(diff);
    const ageDate = new Date(diff);
    // console.log(ageDate);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x+y;
  }

}

const mary = new Person("Mary", "Johnson", "June 2 1983");

console.log(mary);

console.log(mary.greeting());

console.log(mary.calculateAge());

mary.getsMarried("rudic");

console.log(mary.greeting());

console.log(Person.addNumbers(5, 3));
