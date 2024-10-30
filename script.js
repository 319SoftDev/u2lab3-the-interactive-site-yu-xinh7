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
    if (value == 50){
        numOutput.innerHTML="Not 50, guess lower!";
    } else if (value == 30){
        numOutput.innerHTML="Not 50, guess higher!";
    } else if (value == 12){
        numOutput.innerHTML="Not 50, guess higher!";
    }
}

numInput.addEventListener('change', checkNumber);

// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

