// Hoisting...

function interpretted() {
    console.log("Data is : " + data123);
    var data123 = "Mayank";
    console.log("Data is : " + data123);
}

interpretted();

var name11 = "User Name";

outerFunction1();

function outerFunction1() {
    console.log(data1);

    abc1();

    function abc1() {
        console.log("abc")
    }

    var data1 = "Mayank";
}

function outerFunction1() {
    console.log(data1);

    var abc1 = function() {
        console.log("abc 1234")
    }

    abc1();

    var abc1 = function() {
        console.log("abc 12345")
    }

    function abc1() {
        console.log("abc 123456")
    }

    var abc1;

    abc1()

    var data1 = "Mayank";
}
