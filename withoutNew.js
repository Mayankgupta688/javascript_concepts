function Employee(name, age, designation, salary, bonus) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.designation = designation;
    this.bonus = bonus;

    return "10";
}

var employeeOne = new Employee("Mayank", 20, "Developer", 10, 1)
var employeeTwo = Employee("Anshul", 20, "Developer", 40, 5)