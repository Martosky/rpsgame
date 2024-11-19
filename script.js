
const playerGameScore = document.getElementById("player-score");
const computerGameScore = document.getElementById("computer-score")
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const resultMsg = document.getElementById("result-msg");
const winnerMsg = document.getElementById("winner-msg");
const resetBtn = document.getElementById("reset-btn");
const playerOptionbox =document.querySelector(".payer-option")

function getRandomComputerResult(){
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

let playerScore = 0;
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
    if(hasPlayerWOn(userOption, computerResult)){
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`
    } else if(computerResult === userOption){
        return `It's a tie! Both choose ${userOption}`
    }else{
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`
    }
}

function showRoundResult(userOption){
    resultMsg.innerText = getRoundResult(userOption)
    playerGameScore.innerHTML = playerScore;
    computerGameScore.innerHTML = computerScore;
    
    if(playerScore === 3 || computerScore === 3){
        winnerMsg.innerText = `${playerScore === 3 ? "PLayer" : "Computer"} has won the game`
        playerOptionbox.style.display = "none";
        resetBtn.style.display = "block"
    }
    
}

rockBtn.addEventListener("click", function(){
    showRoundResult("Rock")
})

paperBtn.addEventListener("click", function(){
    showRoundResult("Paper")
})

scissorsBtn.addEventListener("click", function(){
    showRoundResult("Scissors")
})

resetBtn.addEventListener("click", function(){
    playerGameScore.innerHTML = 0
    computerGameScore.innerHTML = 0
    playerOptionbox.style.display = "Block";
    resetBtn.style.display = "none"
    resultMsg.innerText = ""
    winnerMsg.innerText = ""

})