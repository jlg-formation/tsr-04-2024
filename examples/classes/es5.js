// @ts-nocheck

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function () {
  console.log("Hello my name is " + this.name);
};

function Employee(name, age, salaire, company) {
  Person.bind(this)(name, age);
  this.salaire = salaire;
  this.company = company;
}

Employee.prototype.saySomething = function () {
  console.log("I earn " + this.salaire + " Euros per day");
};

Employee.prototype.hello = function () {
  Person.prototype.hello.bind(this)();
  console.log(
    // @ts-ignore
    "I am " + this.name + " and I earn " + this.salaire + " Euros per day"
  );
};

Object.setPrototypeOf(Employee.prototype, Person.prototype);

const alice = new Employee("Alice", 15, 1000, "JLG Consulting");
// @ts-ignore
alice.hello();
