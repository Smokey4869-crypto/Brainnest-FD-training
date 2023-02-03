function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }
    if (randomNum === 1) {
        return "paper";
    }
    if (randomNum === 2) {
        return "scissors";
    }
    return;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        console.log("It's a tie!")
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            console.log('Computer chose ' + computerSelection);
            console.log('Computer Win');
        }else{
            console.log('Computer chose ' + computerSelection);
            console.log('Player Win');
        }
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            console.log('Computer chose ' + computerSelection);
            console.log('Computer Win');
        }else{
            console.log('Computer chose ' + computerSelection);
            console.log('Player Win');
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissors'){
            console.log('Computer chose ' + computerSelection);
            console.log('Computer Win');
        }else{
            console.log('Computer chose ' + computerSelection);
            console.log('Computer Win');
        }
    } else {
        console.log('Please choose an appropriate move')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your move: Rock, Paper, Scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = "";
        if (playerSelection != null) {
            computerSelection = computerPlay();
        }
        playRound(playerSelection, computerSelection);
    }
}

game();