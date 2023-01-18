let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = ()=>{
    return Math.floor(Math.random()*10%10);
}
const getAbsoluteDistance = (n1,n2)=>{
  return Math.abs(n2-n1);
}
const compareGuesses = (human,computer,secret)=>{
    const humanGuess = getAbsoluteDistance(human,secret);
    const computerGuess = getAbsoluteDistance(computer,secret);
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
