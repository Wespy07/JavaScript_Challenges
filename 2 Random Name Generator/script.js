/* Create a business name generator by combining one word from each of the list

!!!!!!!!!!WITHOUT USING ARRAYS!!!!!!!!!!!!!

Frist Word:
Crazy 
Amazing
Genuine 
Perfect

Second word:
Engine
Foods
Garments
Automobiles


Third Word:
Company
Public Limited
Private Limited
LLC

*/

let first, second, third, fourth;
// 0 0.25 0.50 0.75 1

// this is the first word
let random = Math.random()
if (random < 0.25){
    first = "Crazy"
}
else if(random >= 0.25 && random <= 0.5){
    first = "Amazing"
}
else if(random >= 0.5 && random <= 0.75){
    first = "Genuine"
}
else{
    first = "Perfect"
}

// this is the second word
random = Math.random()
if (random < 0.25){
    second = "Engine"
}
else if(random >= 0.25 && random <= 0.5){
    second = "Foods"
}
else if(random >= 0.5 && random <= 0.75){
    second = "Garments"
}
else{
    second = "Automobiles"
}

// this is the third word
random = Math.random()
if (random < 0.25) {
    third = "Company"
} 
else if (random >= 0.25 && random <= 0.5) {
    third = "Public Limited"
}
else if (random >= 0.5 && random <= 0.75) {
    third = "Private Limited"
}
else {
    third = "LLC"
}

console.log(`${first} ${second} ${third}`)
