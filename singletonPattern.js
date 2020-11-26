function singletonFunction() {
    var userDetails = null;

    function returnedData() {
        if(userDetails == null) {
            userDetails = {
                name: "Mayank",
                age: 20
            }
        }

        return userDetails;
    }

    return {
        returnedData: returnedData
    }
}

var data = singletonFunction();

var details = data.returnedData();

data.returnedData();

data.returnedData();
