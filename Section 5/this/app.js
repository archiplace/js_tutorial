// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthDay = new Date(dob);
  this.getAge = function(){
    const diff = Date.now() - this.birthDay.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const brad = new Person('Brad', 30);
// const john = new Person('John', 44);

// console.log(john);

const brad = new Person('Dejan', '02/06/1983');

console.log(brad.getAge());