let num = prompt();
let res;
if (num <= 100 & num > 80) {
    res = "A";
} else if (num <= 80 & num > 60) {
    res = "B";
} else if (num <= 60 &&num > 40) {
    res = "C";
} else if (num <= 40 & num > 20) {
    res = "D";
} else {
    res = "F";
}

console.log(res);