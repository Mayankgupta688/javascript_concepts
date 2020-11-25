function Employee(name, age, designation, salary, bonus) {
    var name = name;
    var age = age;
    var designation = designation;
    var salary = salary;
    var bonus = bonus;

    function getDetails() {
        return "User Details are: " + name;
    }

    function getAgeDetails() {
        return "User Age is: " + age;
    }

    function getDesignationDetails() {
        return "User Designation is: " + designation;
    }

    function getSalary() {
        return salary + bonus;
    }

    return {
        getDetails: getDetails,
        getAgeDetails: getAgeDetails,
        getDesignationDetails: getDesignationDetails,
        getSalary: getSalary,
        name: name
    }
}

var employeeOne = Employee("Mayank", 10, "Developer", 10, 1)
var employeeTwo = Employee("Anshul", 20, "Analyst", 5, 2)

debugger;