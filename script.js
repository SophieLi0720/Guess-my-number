'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayTextContent = function (className, text) {
  document.querySelector(className).textContent = text;
};

const gameLogic = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guess) {
      displayTextContent('.message', 'โ No Number!');
    } else if (guess === secretNumber) {
      displayTextContent('.message', '๐ Correct Number!');
      displayTextContent('.number', secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        displayTextContent('.highscore', highScore);
      }
    } else {
      score--;
      displayTextContent('.score', score);
      if (score === 0) {
        displayTextContent('.message', '๐งจ You lost the game!');
      } else {
        displayTextContent(
          '.message',
          guess < secretNumber ? '๐ Too Low!' : '๐ Too High!'
        );
      }
    }
  }
};

const reinitialGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayTextContent('.score', score);
  displayTextContent('.message', 'Start guessing...');
  displayTextContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', gameLogic);
document.querySelector('.again').addEventListener('click', reinitialGame);
