const rollDicePlayer1 = document.getElementById("rollDicePlayer1");
const rollDicePlayer2 = document.getElementById("rollDicePlayer2");
const diceNum1 = document.getElementById("diceNum1");
const diceNum2 = document.getElementById("diceNum2");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const pleaseWaitP1 = document.getElementById("pleaseWaitP1");
const pleaseWaitP2 = document.getElementById("pleaseWaitP2");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

rollDicePlayer1.addEventListener("click", () =>{
    if(currentPlayer === 1){
        let diceResult1 = Math.floor(Math.random() * 6 + 1);
        diceNum1.src = `./${diceResult1}.jpg`;
    
        if(diceResult1 == 1){
            player1Scoreboard.innerHTML = ("You Lose");
            player2Scoreboard.innerHTML = ("You Win");
        }
        else{
            player1Score += diceResult1;
            player1Scoreboard.innerHTML = (player1Score);
            if(player1Score >= 20){
                player1Scoreboard.innerHTML = ("You Win");
                player2Scoreboard.innerHTML = ("You Lose");
            }
            pleaseWaitP1.innerHTML = ("Wait your turn");
            pleaseWaitP2.innerHTML = ("Your Roll");
            currentPlayer = 2;
        }
    }
});

rollDicePlayer2.addEventListener("click", () =>{
    if(currentPlayer === 2){
        let diceResult2 = Math.floor(Math.random() * 6 + 1);
        diceNum2.src = `./${diceResult2}.jpg`;
    
        if(diceResult2 == 1){
            player2Scoreboard.innerHTML = ("You Lose");
        }
        else{
            player2Score += diceResult2;
            player2Scoreboard.innerHTML = (player2Score);
            if(player2Score >= 20){
                player2Scoreboard.innerHTML = ("You Win");
            }
            pleaseWaitP2.innerHTML = ("Wait your turn");
            pleaseWaitP1.innerHTML = ("Your Roll");
            currentPlayer = 1;
        }
    }
});