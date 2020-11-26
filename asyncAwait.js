function getData() {
    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                userId: "1"
            })
        }, 10000)
    })
    return myPromise;

}


async function executeSync() {
    var data = await getData();
    var name = "Mayank";
    var age = 20;

    console.log(name)
    console.log(age)
}

executeSync()
