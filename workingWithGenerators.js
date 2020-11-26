// function* customGenerator() {
//     let x = yield 1;
//     yield x + 1
// }


// let getIterator = customGenerator();

// var nextValue = getIterator.next();
// var otherValue = getIterator.next("Hello World...");
// var otherValueData = getIterator.next(10);
// console.log(nextValue);  

function getNameList() {
    var employeeList = [{
        name: "Mayank",
        age: 20
    }, {
        name: "Anshul",
        age: 30
    }, {
        name: "Ankit",
        age: 40
    }, {
        name: "Aniket",
        age: 32
    }]

    for(let dataInput of employeeList) {
        if(dataInput.age > 30) {
            yield dataInput.name;
        }
    }

}

for(var data of getNameList()) {
    console.log(data)
}