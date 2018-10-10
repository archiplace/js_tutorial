const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Vranic";
mary.age = 38;

console.log(mary);

console.log(mary.greeting());

mary.getsMarried("Smith");

console.log(mary.greeting());


const dejan = Object.create(personPrototypes, {
  firstName: {value: 'Dejan'},
  lastName: {value: 'Rudic'},
  age: {value: 35}
});

console.log(dejan);
console.log(dejan.greeting());
