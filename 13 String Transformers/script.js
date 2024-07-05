const input = document.querySelector('input')
const lowerCaseField = document.querySelector('.lower-case p')
const upperCaseField = document.querySelector('.upper-case p')
const camelCaseField = document.querySelector('.camel-case p')
const pascalCaseField = document.querySelector('.pascal-case p')
const snakeCaseField = document.querySelector('.snake-case p')
const kebabCaseField = document.querySelector('.kebab-case p')
const trimCaseField = document.querySelector('.trim-case p')

lowerCaseField.innerText = input.value.toLowerCase()
upperCaseField.innerText = input.value.toUpperCase()
camelCaseField.innerText = toCamelCase(input.value)
pascalCaseField.innerText = toPascalCase(input.value)
snakeCaseField.innerText = toSnakeCase(input.value)
kebabCaseField.innerText = toKebabCase(input.value)
trimCaseField.innerText = toTrimCase(input.value)


function toCamelCase(str) {
    const string = str.split(' ');
    for (let i = 1; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1).toLowerCase();
    }
    return string.join('');
}

function toPascalCase(str) {
    const string = str.split(' ');
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1).toLowerCase();
    }
    return string.join('');
}

function toSnakeCase(str) {
    return str.split(' ').join('_');
}

function toKebabCase(str) {
    return str.split(' ').join('-');
}

function toTrimCase(str) {
    return str.split(' ').join('');
}


input.addEventListener('input', () => {
    lowerCaseField.innerText = input.value.toLowerCase()
    upperCaseField.innerText = input.value.toUpperCase()
    camelCaseField.innerText = toCamelCase(input.value)
    pascalCaseField.innerText = toPascalCase(input.value)
    snakeCaseField.innerText = toSnakeCase(input.value)
    kebabCaseField.innerText = toKebabCase(input.value)
    trimCaseField.innerText = toTrimCase(input.value)
})


// -----------------------------------------------------------------------------
// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }
// -----------------------------------------------------------------------------
// console.log(x); 
// var x = 5
// -----------------------------------------------------------------------------
// function myFunc() {
//     console.log('this is my function');
//     var k = 45
// }
// console.log(k);
// myFunc()
// -----------------------------------------------------------------------------
// let k = 97          
// if (true) {           
//     k = 98  // let k = 98 to declare a new block scope for same variable name 
//     console.log(k);
// }
// console.log(k);
// -----------------------------------------------------------------------------
