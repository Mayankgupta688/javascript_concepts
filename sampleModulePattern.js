
// Module Pattern 

function outerFunction() {
    var name = "Anshul";
    var age = 10;

    function innerFunction() {
        console.log(age)
    }

    function getData() {
        console.log(name)
    }

    return {
        innerFunction: innerFunction,
        getData: getData
    }
}

var returnedData = outerFunction();

debugger;
var adata = 10
debugger;