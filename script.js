document.getElementById('rollDiceBtn').addEventListener('click', rollDice);

let player1TotalScore = 0;
let player2TotalScore = 0;

function rollDice() {
    const player1Dice = document.getElementById('player1Dice');
    const player2Dice = document.getElementById('player2Dice');
    const player1Score = document.getElementById('player1Score');
    const player2Score = document.getElementById('player2Score');

    const diceImages = [
        'dice1.png',
        'dice2.png',
        'dice3.png',
        'dice4.png',
        'dice5.png',
        'dice6.png'
    ];

    // Generate random numbers for each player
    const player1Roll = Math.floor(Math.random() * 6);
    const player2Roll = Math.floor(Math.random() * 6);

    // Update dice images
    player1Dice.src = diceImages[player1Roll];
    player2Dice.src = diceImages[player2Roll];

    // Update scores
    const player1CurrentScore = player1Roll + 1;
    const player2CurrentScore = player2Roll + 1;

    player1TotalScore += player1CurrentScore;
    player2TotalScore += player2CurrentScore;

     if (player1TotalScore <= 100) {
        player1Score.textContent = player1TotalScore;
    }
    if (player2TotalScore <= 100) {
        player2Score.textContent = player2TotalScore;
    }
    // Check for winning condition
    if (player1TotalScore >= 100) {
        declareWinner("Player 1");
        player1Dice.src = "";
        player2Dice.src = "";
    } else if (player2TotalScore >= 100) {
        declareWinner("Player 2");
        player1Dice.src = "";
        player2Dice.src = "";
    }
}

function declareWinner(winner) {
    alert(winner + " wins!");
    player1TotalScore = 0;
    player2TotalScore = 0;
}
