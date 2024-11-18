const correctAnswer = document.querySelector("#correctAnswer");
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");
const thewinner = document.querySelector("#thewinner");

let answer = Math.floor(Math.random() * 20) + 1;

let playerOne = parseInt(prompt('Player One:'));
let playerTwo = parseInt(prompt('Player Two:'));

if (isNaN(playerOne) || isNaN(playerTwo)) {
    throw new Error('Please write only numbers!');
}

if (playerOne < 0 || playerOne > 20 ||
    playerTwo < 0 || playerTwo > 20) { throw new Error('Only select numbers between 1-20'); }

let playerOneDistance = Math.abs(answer - playerOne);
let playerTwoDistance = Math.abs(answer - playerTwo);

let winner;
if (playerOneDistance < playerTwoDistance) {
    winner = "playerOne";
} else {
    winner = "playerTwo";
}

console.log(`The correct answer is ${answer}`);
console.log(`The winner is ${winner}`);

correctAnswer.innerHTML = `${answer}`;
player1Score.innerHTML = playerOne;
player2Score.innerHTML = playerTwo;
thewinner.innerHTML = `The winner is ${winner}`;