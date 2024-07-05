const inputBox = document.querySelector('input')
const submitButton = document.querySelector('.submit-btn')
const highLowParam = document.querySelector('.high-low-param')
const yourGuesses = document.querySelector('.your-guesses')
const userGuesses = document.querySelector('.guesses')
const submitBtn = document.querySelector('.submit-btn')
const startGameBtn = document.querySelector('.start-game-btn')
const randomNumber = Math.round(Math.random() * 100)

const previousGuesses = []

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const userValue = inputBox.value
    
    if(userValue > randomNumber){
        highLowParam.innerText = 'Too High!'; 
    } else if (userValue < randomNumber){
        highLowParam.innerText = 'Too Low!';
    } else {
        highLowParam.innerText = 'Congrats, you got it right.';
        startGameBtn.disabled = false;
        submitBtn.disabled = true;
    }
    inputBox.value = ''
    previousGuesses.push(userValue)
    console.log(previousGuesses);
    yourGuesses.innerText = 'Your guesses: ' + previousGuesses.join(', ')
})