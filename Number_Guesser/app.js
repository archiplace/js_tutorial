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
    winningNum = getWinningNum(min, max),
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
    guessInput.value = '';
    return;
  }

  // check if won
  if(guess === winningNum){
    gameOver(true, `${winningNum} is correct! YOU WIN`);
  } else {

    // lose case
    // Wrong number
    guessesLeft -= 1;

    // check to se if guess is left
    if(guessesLeft === 0) {
      // Game over
      gameOver(false, `${winningNum} was correct answer. YOU LOST`);
    } else {
      // Game continue wrong answer
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left...`, 'red');
      // change border to red
      guessInput.style.borderColor = 'red';

      guessInput.value = '';
    }
  }

});

// Set Message
function setMessage(msg, color = 'gray'){
  message.style.color = color;
  message.textContent = msg;
}

// function GAME OVER
function gameOver(won, msg) {

  let color;
  won === true ? color = 'green' : color = 'red';

  // disable input
  guessInput.disabled = true;
  // change border to green
  guessInput.style.borderColor = color;
  // let user that they have won
  setMessage(msg, color);
  // change btn to play again
  guessBtn.value = 'Play again';
  guessBtn.addEventListener('click', function(){
    location.reload();
  });
}

// set winninng num
function getWinningNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}