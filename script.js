// TODO: Implement the Again! button
'use strict';
/*
// Get text from inside of the tag.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `🎉 Currect Number!`;
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 8;
document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value = 27;
console.log((document.querySelector('.guess').value = 27));
*/
let GuessNumber = Math.trunc(Math.random() * 20 + 1);
console.log(GuessNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// NOTE: Click event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no valid input
  if (!guess) {
    displayMessage('⛔ No Number');
    // When player wins
  } else if (guess === GuessNumber) {
    displayMessage('🎉 Currect Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = `?`;

    // High Score
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    // When guess is less than Generated number
  } else if (guess < GuessNumber) {
    displayMessage('↘ Too Low!!');
    score--;
    // When Guess is gratter than Generated number
  } else if (guess > GuessNumber) {
    displayMessage('↗ Too High!!');
    score--;
  }
  // If score is less than or equal to 0
  if (score <= 0) {
    document.querySelector(
      '.label-score'
    ).textContent = `♨ You lost the game! `;
  } else {
    const scores = (document.querySelector('.score').textContent = `${score}`);
    console.log(scores);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  GuessNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(GuessNumber);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
