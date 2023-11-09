/* sophisticated_program.js
   This code demonstrates a sophisticated program written in JavaScript. It is an implementation of a simple game called "Guess the Number".
   The program generates a random number between 1 and 100, lets the user guess the number, and provides feedback on whether the guess is too high or too low.
   It also keeps track of the number of attempts made by the user and displays the final score at the end.
   Enjoy the game!
*/

const readline = require('readline');

// Generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Game initialization
const targetNumber = generateRandomNumber(1, 100);
let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to validate user input and handle each guess
function handleGuess(guess) {
  const parsedGuess = parseInt(guess, 10);
  attempts++;

  if (isNaN(parsedGuess)) {
    console.log('Invalid input, please enter a valid number.');
    rl.prompt();
  } else if (parsedGuess < targetNumber) {
    console.log('Too low, try again!');
    rl.prompt();
  } else if (parsedGuess > targetNumber) {
    console.log('Too high, try again!');
    rl.prompt();
  } else {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
    rl.close();
  }
}

// Game start message
console.log('Welcome to "Guess the Number"!\n');
console.log('I have selected a random number between 1 and 100.');
console.log('Try to guess the number and I will provide hints.\n');

// Prompt user for first guess
rl.setPrompt('Enter your guess: ');
rl.prompt();

// Event listener for user input (guess)
rl.on('line', (guess) => {
  handleGuess(guess);
}).on('close', () => {
  process.exit(0);
});