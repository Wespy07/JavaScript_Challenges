
// when there is only image _______________________________________________
// const button = document.querySelector('button')
// const image = document.querySelector('img')
// button.addEventListener('click', () => {

//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(response => response.json())
//         .then(json => {
//             image.src = json.message
//         })
// })




// when there are multiple images _________________________________________
const button = document.querySelector('button')
const image = document.querySelectorAll('img')

// we use forEach with fetch here _________________________________________
// image.forEach(image => {
//     button.addEventListener('click', () => {
//         fetch('https://dog.ceo/api/breeds/image/random')
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json.message)
//                 image.src = json.message
//             })
//     })
// })





// we use forEach with XML HTTP Request here_______________________________
image.forEach(images => {
    button.addEventListener('click', () => {

        const xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.response);
            images.src = response.message;
        })

        xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
        xhr.send()
    })
})
