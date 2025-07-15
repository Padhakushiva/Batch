class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating a new Person object
const person1 = new Person("Shiva", 20);

// Output to console
console.log("Name:", person1.name);  // Output: Shiva
console.log("Age:", person1.age);    // Output: 20
