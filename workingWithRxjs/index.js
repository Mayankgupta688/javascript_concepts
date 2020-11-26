// List of Employee (Api)

var numberGeneratorObservable = Rx.Observable.create((observer) => {
    var emplList = []
    setInterval(() => {
        observer.next(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
    }, 1000);
})


numberGeneratorObservable.subscribe((data) => {
    document.getElementById("header_app").innerText = `The Current Time is ${data}`;
})