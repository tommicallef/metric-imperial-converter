const convertButton = document.getElementById("convert-btn")
const inputField = document.getElementById("input-field")

const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")

let inputValue = inputField.value

updateCalculations(inputValue)

convertButton.addEventListener("click", function() {
    
    // update inputValue
    inputValue = inputField.value
    
    updateCalculations(inputValue)
})

function updateLength(input) {
    let meters = (input * 3.281).toFixed(3);
    let feet = (input/3.281).toFixed(3);
    
    lengthEl.innerHTML = ` ${input} meters = ${meters} feet | ${input} feet = ${feet} metres`
}

function updateVolume(input) {
    let litres = (input * 0.264).toFixed(3);
    let gallons = (input/0.264).toFixed(3);
    
    volumeEl.innerHTML = ` ${input} litres = ${litres} gallons | ${input} gallons = ${gallons} litres`
}

function updateMass(input) {
    let kilograms = (input * 2.204).toFixed(3);
    let pounds = (input/2.204).toFixed(3);
    
    massEl.innerHTML = ` ${input} kilos = ${kilograms} pounds | ${input} pounds = ${pounds} kilos`
}

function updateCalculations(input) {
    updateLength(input)
    updateVolume(input)
    updateMass(input)
}