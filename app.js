const rollDice = document.getElementById("rollDice");
const diceNum1 = document.getElementById("diceNum1");
const player1Scoreboard = document.getElementById("player1Scoreboard");

let player1Score = 0;

rollDice.addEventListener("click", () =>{
    let diceResult1 = Math.floor(Math.random() * 6 + 1);
    diceNum1.src = `./${diceResult1}.jpg`;
    
    if(diceResult1 == 1){
        player1Scoreboard.innerHTML = ("You Lose");
    }
    else{
        player1Score += diceResult1;
        player1Scoreboard.innerHTML = (player1Score);
        if(player1Score >= 20){
            player1Scoreboard.innerHTML = ("You Win");
        }
    }
});