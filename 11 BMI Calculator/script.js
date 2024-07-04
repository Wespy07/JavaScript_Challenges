const heightBox = document.querySelector('.height')
const weightBox = document.querySelector('.weight')
const bmiButton = document.querySelector('.bmi-btn')
const bmiDisplay = document.querySelector('form span')
const moreDetails = document.querySelector('.more-details')


bmiButton.addEventListener('click', (e) => {
    e.preventDefault()
    const heightValue = parseInt(heightBox.value)
    const heightInMeters = heightValue * 0.01
    const weightValue = parseInt(weightBox.value)
    const bmi = weightValue / (heightInMeters ** 2)
    const bmiRound = bmi.toFixed(2);
    bmiDisplay.innerText = bmiRound

    if (bmi < 18.5 && bmi > 15) {
        moreDetails.innerText = 'You are underweight category.'
    } else if (bmi >= 18.5 && bmi <= 24.9){
        moreDetails.innerText = 'You are normal category.'
    } else if (bmi >24.9 && bmi <= 29.9){
        moreDetails.innerText = 'You are normal category.'
    } else if (bmi >24.9 && bmi <= 34.9){
        moreDetails.innerText = 'You are obese category.'
    } else {
        moreDetails.innerText = 'You should live on Mars.'
    }
})