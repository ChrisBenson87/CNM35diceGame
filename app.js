const newGameButton = document.getElementById("newGameButton");
const objective = document.getElementById("objective");
const diceImg1 = document.getElementById("diceImg1");
const diceImg2 = document.getElementById("diceImg2");
const rollDicePlayer1 = document.getElementById("rollDicePlayer1");
const rollDicePlayer2 = document.getElementById("rollDicePlayer2");
const diceNum1 = document.getElementById("diceNum1");
const diceNum2 = document.getElementById("diceNum2");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const holdPlayer1 = document.getElementById("holdPlayer1");
const holdPlayer2 = document.getElementById("holdPlayer2");
const player1Status = document.getElementById("player1Status");
const player2Status = document.getElementById("player2Status");
const playAgain = document.getElementById("playAgain");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 0;
let playAgainAct = 0;

newGameButton.addEventListener("click", () =>{
    currentPlayer = 1;
    objective.innerHTML = ("Press Roll Dice to roll the dice. If you hit 20 or more you win. If you roll a 1 you loose.");
    player1Status.innerHTML = ("Your Roll");
    player2Status.innerHTML = ("Wait your turn");
})

rollDicePlayer1.addEventListener("click", () =>{
    if(currentPlayer == 1){
        objective.innerHTML = ("You can hit the hold button if your want to give the other player a try.")
        player1Status.innerHTML = ("Your Roll");
        player2Status.innerHTML = ("Wait your Turn");
        let diceResult1 = Math.floor(Math.random() * 6 + 1);
        diceNum1.src = `./${diceResult1}.jpg`;
            
        if(diceResult1 == 1){
            player1Status.innerHTML = ("You Lose");
            player2Status.innerHTML = ("You Win");
            objective.innerHTML = ("Congrats Player 2 you win. Press play again if you want to play again.");
            playAgainAct = 1;
        }
        else{
            player1Score += diceResult1;
            player1Scoreboard.innerHTML = (player1Score);
            if(player1Score >= 20){
                objective.innerHTML = ("Congrats Player 1 you win. Press play again if you want to play again.");
                player1Status.innerHTML = ("You Win");
                player2Status.innerHTML = ("You Lose");
                playAgainAct = 1;
            }
        }
    }
});

holdPlayer1.addEventListener("click", () =>{
    currentPlayer = 2;
    player2Status.innerHTML = ("Your Roll");
    player1Status.innerHTML = ("Wait your Turn");
})

rollDicePlayer2.addEventListener("click", () =>{
    if(currentPlayer == 2){
        player2Status.innerHTML = ("Your Roll");
        player1Status.innerHTML = ("Wait your turn");
        let diceResult2 = Math.floor(Math.random() * 6 + 1);
        diceNum2.src = `./${diceResult2}.jpg`;
    
        if(diceResult2 == 1){
            player2Status.innerHTML = ("You Lose");
            player1Status.innerHTML = ("You Win");
            objective.innerHTML = ("Congrats Player 1 you win. Press play again if you want to play again.");
            playAgainAct = 1;
        }
        else{
            player2Score += diceResult2;
            player2Scoreboard.innerHTML = (player2Score);
            if(player2Score >= 20){
                objective.innerHTML = ("Congrats Player 2 you win. Press play again if you want to play again.");
                player2Status.innerHTML = ("You Win");
                player1Status.innerHTML = ("You Lose");
                playAgainAct = 1;
            }
        }
    }
});

holdPlayer2.addEventListener("click", () =>{
    currentPlayer = 1;
    player1Status.innerHTML = ("Your Roll");
    player2Status.innerHTML = ("Wait your Turn");
})

playAgain.addEventListener("click", () =>{
    if(playAgainAct === 1){
        player1Score = 0;
        player1Scoreboard.innerHTML = 0;
        diceNum1.src = "";
        player2Score = 0;
        player2Scoreboard.innerHTML = 0;
        diceNum2.src = "";
        currentPlayer = 1;
    }
})