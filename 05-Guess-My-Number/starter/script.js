'use strict';

const createRandomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let randomNumber = createRandomNumber();
console.log(randomNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

let score = 20;
displayScore(score);

let highscore = 0;
displayHighscore(highscore);

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('Please enter your nunber into the field left..');
  } else if (guessNumber === randomNumber) {
    displayMessage('Congratulations! You guessed right!');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guessNumber !== randomNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > randomNumber
          ? 'Too high! Try another number!'
          : 'Too low! Try another number!'
      );
      score--;
      displayScore(score);
    } else {
      score--;
      displayScore(score);
      displayMessage('Game over! Click "Again" button to restart!');
      document.querySelector('body').style.backgroundColor = 'brown';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = createRandomNumber();
  console.log(randomNumber);

  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  displayScore(score);
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
});
