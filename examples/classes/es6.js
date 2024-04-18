// @ts-nocheck

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("Hello my name is " + this.name);
  }
}

// @ts-ignore
class Employee extends Person {
  constructor(name, age, salaire, company) {
    super(name, age);
    this.salaire = salaire;
    this.company = company;
  }

  saySomething() {
    console.log("I earn " + this.salaire + " Euros per day");
  }

  hello() {
    super.hello();
    console.log(
      // @ts-ignore
      "I am " + this.name + " and I earn " + this.salaire + " Euros per day"
    );
  }
}

const alice = new Employee("Alice", 15, 1000, "JLG Consulting");
// @ts-ignore
alice.hello();
