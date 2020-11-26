class Employee {
    constructor() {
      this.name = "M";
      this.age = 10
    }
    getDetails() {
      console.log(this.name)
    }
    getAge() {
      console.log(this.age)
    }
}

var employeeOne = new Employee();
  
// Equivalent ES5 Code

function Employee() {
    this.name = "M";
    this.age = 10;
}
Employee.prototype.getDetails = function () {
    console.log(this.name);
};
Employee.prototype.getAge = function () {
    console.log(this.age);
};

var employeeTwo = new Employee();