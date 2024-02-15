'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent =
      'Please enter your nunber into the field left..';
  } else if (guessNumber === randomNumber) {
    document.querySelector('.message').textContent =
      'Congratulations! You guessed right!';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high! Try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'Game over! Click "Again" button to restart!';
      document.querySelector('body').style.backgroundColor = 'brown';
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! Try again!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'Game over! Click "Again" button to restart!';
      document.querySelector('body').style.backgroundColor = 'brown';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);

  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';
});
