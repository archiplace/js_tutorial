/* 
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Ler player choos to play again
*/

// Game values
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft =3;

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);
  message.textContent = '';

  // Validate
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please choose number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum){
    // disable input
    guessInput.disabled = true;
    // change border to green
    guessInput.style.borderColor = 'green';
    // let user that they have won
    setMessage(`${winningNum} is correct! YOU WIN`, 'green');
    // change btn to play again
    guessBtn.value = 'Play again';
    guessBtn.addEventListener('click', function(){
      location.reload();
    })
  } else {

  }

});

// Set Message
function setMessage(msg, color = 'gray'){
  message.style.color = color;
  message.textContent = msg;
}