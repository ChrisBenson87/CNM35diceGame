const newGameButton = document.getElementById("newGameButton");
const objective = document.getElementById("objective");
const diceImg1 = document.getElementById("diceImg1");
const diceImg2 = document.getElementById("diceImg2");
const rollDicePlayer1 = document.getElementById("rollDicePlayer1");
const rollDicePlayer2 = document.getElementById("rollDicePlayer2");
const diceNum1 = document.getElementById("diceNum1");
const diceNum2 = document.getElementById("diceNum2");
const player1CurrentScoreboard = document.getElementById("player1CurrentScoreboard");
const player2CurrentScoreboard = document.getElementById("player2CurrentScoreboard");
const holdPlayer1 = document.getElementById("holdPlayer1");
const holdPlayer2 = document.getElementById("holdPlayer2");
const player1OverallScoreboard = document.getElementById("player1OverallScoreboard");
const player2OverallScoreboard = document.getElementById("player2OverallScoreboard");
const player1Status = document.getElementById("player1Status");
const player2Status = document.getElementById("player2Status");
const playAgain = document.getElementById("playAgain");

let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1OverallScore = 0;
let player2OverallScore = 0;
let currentPlayer = 0;
let playAgainAct = 0;

newGameButton.addEventListener("click", () =>{
    currentPlayer = 1;
    objective.innerHTML = ("Press Roll Dice and score points based on the roll of the dice. If you hit 20 or more you win. If you roll a 1 you loose.");
    player1Status.innerHTML = ("Your Roll");
    player2Status.innerHTML = ("Wait your turn");
})

rollDicePlayer1.addEventListener("click", () =>{
    if(currentPlayer == 1){
        objective.innerHTML = ("You may want to press hold to keep your score. Beware if you roll a 1 you loose all your points.")
        player1Status.innerHTML = ("Your Roll");
        player2Status.innerHTML = ("Wait your Turn");
        let diceResult1 = Math.floor(Math.random() * 6 + 1);
        diceNum1.src = `./${diceResult1}.jpg`;
            
        if(diceResult1 == 1){
            player1OverallScore = 0;
            player1OverallScoreboard.innerHTML = 0;
            player1CurrentScore = 0;
            player1CurrentScoreboard.innerHTML = 0;
            player2Status.innerHTML = ("Your Roll");
            player1Status.innerHTML = ("Wait your turn");
            currentPlayer = 2;
        }
        else{
            player1CurrentScore += diceResult1;
            player1CurrentScoreboard.innerHTML = (player1CurrentScore);
            player1OverallScore += diceResult1;
            player1OverallScoreboard.innerHTML = (player1OverallScore);
            if(player1OverallScore >= 20 || player1CurrentScore >= 20){
                objective.innerHTML = ("Congrats Player 1 you win. Press play again if you want to play again.");
                player1Status.innerHTML = ("You Win");
                player2Status.innerHTML = ("You Lose");
                playAgainAct = 1;
            }
        }
    }
});

holdPlayer1.addEventListener("click", () =>{
    player1CurrentScore = 0;
    player1CurrentScoreboard.innerHTML = 0;
    player2Status.innerHTML = ("Your Roll");
    player1Status.innerHTML = ("Wait your Turn");
    currentPlayer = 2;
})

rollDicePlayer2.addEventListener("click", () =>{
    if(currentPlayer == 2){
        player2Status.innerHTML = ("Your Roll");
        player1Status.innerHTML = ("Wait your turn");
        let diceResult2 = Math.floor(Math.random() * 6 + 1);
        diceNum2.src = `./${diceResult2}.jpg`;
    
        if(diceResult2 == 1){
            player2OverallScore = 0;
            player2OverallScoreboard.innerHTML = 0;
            player2CurrentScore = 0;
            player2CurrentScoreboard.innerHTML = 0;
            player1Status.innerHTML = ("Your Roll");
            player2Status.innerHTML = ("Wait your turn");
            currentPlayer = 1;
        }
        else{
            player2CurrentScore += diceResult2;
            player2CurrentScoreboard.innerHTML = (player2CurrentScore);
            player2OverallScore += diceResult2;
            player2OverallScoreboard.innerHTML = (player2OverallScore);
            if(player2OverallScore >= 20 || player2CurrentScore >= 20){
                objective.innerHTML = ("Congrats Player 2 you win. Press play again if you want to play again.");
                player2Status.innerHTML = ("You Win");
                player1Status.innerHTML = ("You Lose");
                playAgainAct = 1;
            }
        }
    }
});

holdPlayer2.addEventListener("click", () =>{
    player2CurrentScore = 0;
    player2CurrentScoreboard.innerHTML = 0;
    player1Status.innerHTML = ("Your Roll");
    player2Status.innerHTML = ("Wait your Turn");
    currentPlayer = 1;
})

playAgain.addEventListener("click", () =>{
    if(playAgainAct === 1){
        player1CurrentScore = 0;
        player1CurrentScoreboard.innerHTML = 0;
        player1OverallScore = 0;
        player1OverallScoreboard.innerHTML = 0;
        diceNum1.src = "";
        player2CurrentScore = 0;
        player2CurrentScoreboard.innerHTML = 0;
        player2OverallScore = 0;
        player2OverallScoreboard.innerHTML = 0;
        diceNum2.src = "";
        currentPlayer = 1;
    }
})