let factorial = 1;
let i = 1;
bucle: while (true) {
    if (i > 10) {
        break bucle;
    }
    factorial *= i;
    i++;
}

console.log(factorial)