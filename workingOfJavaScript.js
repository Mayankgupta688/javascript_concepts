function gettingStarted() {
    setTimeout(function firstFunction() {
        console.log("Hello World 1...")
        for(var i = 0; i< 2; i++) {
            console.log(i)
        }
    }, 0);

    setTimeout(function second() {
        console.log("Hello World 2...")
    }, 0);

    setTimeout(function thisrd() {
        console.log("Hello World 3...")
    }, 0);

    setTimeout(function forth() {
        console.log("Hello World 4...")
    }, 0);

    for(var i = 0; i< 5; i++) {
        console.log(i)
    }
}

gettingStarted();