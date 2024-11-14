

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