// YOUR CODE HERE --> PART 1
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");
const displayColor = (e) => {
    //the color that was selected
    const color = e.target.value;
    if (color == 'blue'){
        radioOutput.innerHTML= "You picked blue 💙";
    } else if (color =='green') {
        radioOutput.innerHTML= 'You picked green 💚';
    } else if (color=='pink') {
        radioOutput.innerHTML="Pink - You picked pink 💕";
    } else if (color=='black') {
        radioOutput.innerHTML="Black - You picked black 🖤";
    }  
};
radioInput.addEventListener('change', displayColor);
// PART 2 ----->
// getRandomInt() - gets a random number between 1 and 100
const randomNumber = getRandomInt();
console.log(randomNumber);
const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");
const checkNumber = (e) => {
    // the inputted number (as an integer not as a string)
    const value = e.target.valueAsNumber;
    // Insert conditional code here.
    if (value> randomNumber){
        numOutput.innerHTML='Not'+              value    +'guess lower!';
    } else if (value < randomNumber){
        numOutput.innerHTML='Not'+      value    +'guess higher!';
    } else if (value == randomNumber){
        numOutput.innerHTML='Hurray you got it! It is!' +        value;
    };
};

numInput.addEventListener('change', checkNumber);

// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#sr-continent-alert");

// Part 3 ---->
const continents = ["North America", "Europe", "Asia", "South America", "Africa", "Australia", "Antarctica"];
let guessedContinents = [];
const checkContinent = (e) => {
    const input = e.target.value.trim().toLowerCase();  
    e.target.value = '';  
    const formattedInput = input.charAt(0).toUpperCase() + input.slice(1);
    if (continents.includes(formattedInput)) {
        if (!guessedContinents.includes(formattedInput)) {
            guessedContinents.push(formattedInput);
            textOutput.innerHTML = `yes, ${formattedInput} is a continent. ${guessedContinents.length} out of 7`;
         const imgElement = document.querySelector(`img[alt="${formattedInput}"]`);
        if (imgElement) {
            imgElement.classList.remove("hidden");
        } else {
            textOutput.innerHTML = `${formattedInput} has already been selected.`;
    } else {
        textOutput.innerHTML = `${formattedInput} is not a continent.`;
    }
};
textInput.addEventListener('change', checkContinent);
