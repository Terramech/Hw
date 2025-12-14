class AuthentificationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthentificationError";
    }
}
class RangeErrorCustom extends Error {
    constructor(message) {
        super(message);
        this.name = "RangeErrorCustom";
    }
}
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "RangeErrorCustom";
    }
}
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}


//1

password = "546"
passLengthValidation = (pass) => {
    if (pass.length < 8) {
        throw new AuthentificationError("Password must be 8 characters or longer");
    }else {
        return true;
    }
}

try {
    passLengthValidation(password);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}   finally {
    console.log("validation complete");
}

//2

processData = (val) => {
    if (typeof val !== 'number') {
        throw new ValidationError("Not a number");
    } else if (val < 0) {
        throw new RangeErrorCustom("Number cant be less than 0");
    } else {
    return val * 2;
    }
}
try {
    processData("a")
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
try {
    processData(-5)
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}
try {
    console.log(processData(10));
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

//3
let data = 0

connectAndProcess = (data) => {
    try {
        console.log("connecting...");
        if (data == 0) {
            throw new NetworkError("failed to connect to the network");
        } else {
            console.log("connection successful");
        }
    } catch (error) {
            console.error(`${error.name}: ${error.message}`);
    } finally {
        console.log("connection closed");
    }

}
connectAndProcess(data);