
const playerScore =document.getElementById("player-score")
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetBtn = document.getElementById("reset-btn");

function getRandomComputerResult(){
    let Options = ["Rock","Paper","Scissors"];
    let randomCheck = Math.floor(Math.random() * Option.length)
    return Options[randomCheck]
}

function checkPlayerChoice(){
    return(
        (player=="rock")
    )
}