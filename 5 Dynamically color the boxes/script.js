console.log('yess');
// Dynamically color each box using JS


let myBoxes = document.querySelectorAll(".boxes")
// this returns a NodeList
// console.log(myBoxes);

// myBoxes[2].style.backgroundColor = "red"
// this is how we will target each box using the index of each element in the nodeList. THIS IS NOT AN ARRAY YET,but still we can target each element of this nodeList using the index of it.


// myBoxes.forEach( (boxes) => {
//     boxes.style.backgroundColor = "red"
// } )
// here we use forEach loop to color all boxes in red bg color but this is not what we are required to do. we have to color all boxes differently and dynamically 


let myArray = Array.from(myBoxes)
// this will convert the nodeList to array. now we can call all the array functions on this nodeList 
// console.log(myArray);


// +++++++++++ Lets solve our problem at hand now +++++++++++++

let parent = document.querySelector(".container")
let boxes = parent.children
// console.log(boxes);

function dynamicColorBoxes () {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}
myArray.forEach( (box) => {
    box.style.backgroundColor = dynamicColorBoxes()
} )
