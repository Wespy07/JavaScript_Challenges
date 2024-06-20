console.log("Hello JS!");


/*
Create a faulty calculator that will perfrom correct operations 80% of the time but the remaining 20% it will performt the following operations 

    + = *
    - = /
    * = -
    / = +
*/
let z = Math.random()
console.log(z)

let a = prompt("Enter first number")
let b = prompt("Enter operation")
let c = prompt("Enter second number")

let my_object={
    "+": "*",
    "-": "/",
    "*": "-",
    "/": "+",
}



if (z > 0.2) {
    // This will display the correct calculation
    console.log(`The result of ${a} ${b} ${c} =`, eval(`${a} ${b} ${c}`)); 
    alert(eval(`${a} ${b} ${c}`))
    
} else {
    // This will display the incorrect calculation
    b=my_object[b];
    console.log(`The result of ${a} ${b} ${c} is `, eval(`${a} ${b} ${c}`)); 
    alert(eval(`${a} ${b} ${c}`))
}