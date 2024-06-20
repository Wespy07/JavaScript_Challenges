// Solution Using reduce 
function factorial(num) {
    let myArr = Array.from(Array(num + 1))
    let c = myArr.slice(1,).reduce((a, b) => a * b)
    return c;
}
console.log(factorial(5));

// I did factorial 5 but you can call the function "factorial(num) and in place of 'num' you can provide any number and the function will provide you with its factorial value.


// Solution using recursion
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
// the factorial function calls itself inside the else block 'factorial(n - 1)', this is called recursion 
console.log(factorial(5));
