let num = prompt();
if ((num % 3 == 0) & (num % 5 == 0)) {
    console.log("Кратно 3 и 5");
} else if (num % 3 == 0) {
    console.log("кратно 3");
} else if (num % 5 == 0) {
    console.log("Кратно 5");
} else {
    console.log("Не кратно");
}