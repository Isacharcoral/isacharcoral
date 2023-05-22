// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the input and message elements from the DOM
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(guessInput.value);

  // Check if the user's guess matches the random number
  if (userGuess === randomNumber) {
    message.textContent = 'Congratulations! You guessed the correct number!';
    message.style.color = 'green';
    guessInput.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = 'Too low! Try a higher number.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try a lower number.';
    message.style.color = 'red';
  }

  // Clear the input field
  guessInput.value = '';
}
