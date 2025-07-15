function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    // Creating a new Person object
    const person1 = new Person("Shiva", 20);

    // Output to console
    console.log("Name:", person1.name);  // Output: Shiva
    console.log("Age:", person1.age);    // Output: 20