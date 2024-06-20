const button = document.querySelector('.btn')
const popup = document.querySelector('.parent')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')


button.addEventListener('click', () => {
    popup.classList.add('parent-open')
})

close.addEventListener('click', () => {
    popup.classList.remove('parent-open')
})

overlay.addEventListener('click', () => {
    popup.classList.remove('parent-open')
})