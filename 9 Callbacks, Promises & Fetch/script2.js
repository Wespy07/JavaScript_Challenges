// PROMISES

const resolveBtn = document.querySelector('#resolve-button')
const rejectBtn = document.querySelector('#reject-button')

const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', () => {
        resolve('resolved')
    })
    rejectBtn.addEventListener('click', () => {
        reject('rejected')
    })

})


// p.then((data) => {
//     console.log(data)
//     console.log('Resolved and Then')
// }).catch((err) => {
//     console.log(err)
//     console.log('Rejected and Catch')
// })
// .finally(() => {
//     console.log('Finally was called');
// })


// .then & .catch both of them return a prmoise so we can keep on using .then on .then and hence we can solve our callback hell problem. Eg:

p.then((data) => {
    console.log(data)
    console.log('Resolved and Then')
    return 99
}).then((data) => {
    console.log(data);
    return 'wewe'
}).then((data) => {
    console.log(data)
    return 'returned from then'
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})