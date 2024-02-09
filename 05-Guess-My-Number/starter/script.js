'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);

console.log(randomNumber);

let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = `Please enter your number`;
  } else if (guessedNumber === randomNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > 1) {
      document.querySelector('.message').textContent = `Right!`;
      score--;
      document.querySelector('.score').textContent = score;
      highscore++;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      document.querySelector('.message').textContent = `Game over!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessedNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game over!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessedNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `Game over!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = null;
});
