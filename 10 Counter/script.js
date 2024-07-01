const h2 = document.querySelector('h2')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const reset = document.querySelector('.reset')
const myInput = document.querySelector('input')

myInput.value = 1

plus.addEventListener('click', () => {
    h2.innerText = parseInt(h2.innerText) + parseInt(myInput.value)
})

minus.addEventListener('click', () => {
    h2.innerText = parseInt(h2.innerText) - parseInt(myInput.value)
})

reset.addEventListener('click', () => {
    h2.innerText = 0
})