
const playerGameScore =document.getElementById("player-score");
const computerGameScore = document.getElementById("computer-score")
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

const playerSCore = 0;
let computerScore = 0;

function hasPlayerWOn(player, computer){
    return(
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    )
}

function getRoundResult(userOption){
    const computerResult = getRandomComputerResult();
    if(hasPlayerWOn(player, computerResult)){
        playerSCore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    } else if(computerResult === userOption){
        return `It's a tie! Both choose ${userOption}`
    }else{
        computer++;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

function showRoundResult(userOption){
    resultMsg.innerText = getRoundResult(userOption)
    playerGameScore.innerHTML = playerSCore;
    computerGameScore.innerHTML = computerScore;

    if(playerSCore === 3){
        winnerMsg.innerText = "Player has won the game!";

    }
}

rockBtn.addEventListener("click", function(){
    showRoundResult("Rock")
})

paperBtn.addEventListener("click", function(){
    showRoundResult("Paper")
})

scissorsBtn.addEventListener("click", function(){
    showRoundResult("SCissors")
})