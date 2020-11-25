// Capability/Abaility of a function to access the enviroment in which it is create...

var name = "Mayank Gupta";

function getName() {
    console.log(name)
}

getName();


// Module Pattern 

window.username = "akfasg" 

function outerFunction() {
    var name = "Anshul";
    var age = 10;

    function innerFunction() {
        var agedata = 20;
        console.log(age)
        console.log(username)

        function innerInnerFunction() {
            console.log(username) 
            console.log(agedata)      
            console.log(name)        
        }

        innerInnerFunction();
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
returnedData.innerFunction();

var data = 10