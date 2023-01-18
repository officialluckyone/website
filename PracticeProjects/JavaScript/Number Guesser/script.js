let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
    return Math.floor(Math.random()*10%10);
}

const compareGuesses = (human,computer,secret)=>{
    const humanGuess = Math.abs(secret - human);
    const computerGuess = Math.abs(secret - computer);
    if (humanGuess <= computerGuess){
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner)=>{
    if (winner === 'human'){
        humanScore++;
    } else{
        computerScore++;
    }
}

const advanceRound = ()=>{
    currentRoundNumber++;
}