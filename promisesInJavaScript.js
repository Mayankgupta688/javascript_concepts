function getData() {
    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: "1"
            })
        }, 5000)
    })

    return myPromise;
}

function getOtherData() {
    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: "10"
            })
        }, 1000)
    })

    return myPromise;
}

getData().then(function success(data) {
    var myUser = data.userId;

    $.get(`https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/${myUser}`).then((employeeDetails) => {
        console.log(employeeDetails)
    })

}, function failure(err) {
    debugger;
    console.log(err)
});

Promise.all([getData(), getOtherData()]).then((data) => {
    debugger;
})

var name = "Mayank";
var age = 20;

console.log(name)
console.log(age)