let boxes = document.querySelectorAll(".canvas span")
let body = document.body
// console.log(boxes);

// using if-else ladder
// boxes.forEach( (btns) => {
//     console.log(btns);
//     btns.addEventListener("click", (e) =>{
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(e.target.id);
//         if (e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id
//         } else if (e.target.id === 'palevioletred') {
//             body.style.backgroundColor = e.target.id
//         } else if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id
//         } else if (e.target.id === 'green') {
//             body.style.backgroundColor = e.target.id
//         } else if (e.target.id === 'peru') {
//             body.style.backgroundColor = e.target.id
//         } else if (e.target.id === 'royalblue') {
//             body.style.backgroundColor = e.target.id
//         } else {
//             body.style.backgroundColor = 'black'
//         }
//     })
// })


// Using switch-case
boxes.forEach((btns) => {
    console.log(btns);
    btns.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.id);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'palevioletred':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'peru':
                body.style.backgroundColor = e.target.id
                break;
            case 'royalblue':
                body.style.backgroundColor = e.target.id
                break;
            default:
                body.style.backgroundColor = 'black'
                break;
        }
    })
})



// both the cases are working properly
