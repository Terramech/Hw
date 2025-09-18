let num = prompt();
let x = "простое"
for (let i = 2; i < (num - 1); i++) {
    if (num % i == 0) {
        x = "составное"
        break
    }
}
console.log(x)