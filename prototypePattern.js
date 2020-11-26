// Create New Memory Space
// Add Properties to the newly created space
// Returns the reference of this new nemory space by default
// This reference is saved in the variable "employeeOne"


function Employee(name, age, designation, salary, bonus) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.designation = designation;
    this.bonus = bonus;
}

Employee.prototype.getDetails = function() {
    return this.name;
}

Employee.prototype.staticValue = 10;

var employeeOne = new Employee("Mayank", 20, "Developer", 10, 1);
var employeeTwo = new Employee("Anshul", 20, "Developer", 40, 5);

employeeOne.getDetails()
employeeTwo.getDetails()