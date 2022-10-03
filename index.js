let playerScore = 0;
let computerScore = 0;
const getComputerChoice = () => {
    const arrChar = ['sorcerer', 'fighter', 'summoner'];
    const randomNumSelect = Math.floor(Math.random() * 3);
    character = arrChar[randomNumSelect];
    return character;
}
const playRound = (_playerSelection,_computerSelection) =>{
    _computerSelection = getComputerChoice();
    _playerSelection = prompt('Choose your character!: ').toLowerCase();
    if (_playerSelection === 'sorcerer' && _computerSelection === 'sorcerer'){
        return "The Sorcerer's magic resulted into a draw!";
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'fighter'){
        return "The Fighter was no match against the Sorcerer!";
        playerScore++
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'summoner'){
        return "The Summoner's summons outpowered the Sorcerer!!";
        computerScore
    } else if (_playerSelection === 'fighter' && _computerSelection === 'sorcerer'){
        return 'Magic outpowered your fist!';
        computerScore
    } else if (_playerSelection === 'fighter' && _computerSelection === 'fighter'){
        return "They fought 'til the end but no one won!";
    } else if (_playerSelection === 'fighter' && _computerSelection === 'summoner'){
        return 'Even the summoned minions were vanished!';
        playerScore++
    } else if (_playerSelection === 'summoner' && _computerSelection === 'sorcerer'){
        return 'The Summoner summoned a win!';
        playerScore++
    } else if (_playerSelection === 'summoner' && _computerSelection === 'fighter'){
        return 'Fighter easily destroyed Summoner!';
        computerScore
    } else{
        return 'Even with great summons it still resulted into a draw!';
    }
}
const game = () => {
for (let i = 0; i < 5; i++) {
    console.log(playRound());
}
if (playerScore > computerScore){
    return 'Congratulations! You\'\ve chosen the correct set of characters that led you to VICTORY!';
}else if (playerScore < computerScore){
    return 'Oh no! The opponent chose a better set of characters that led you to your DEFEAT!'
} else {
    return 'Woah! That was a close one, but it is still a DRAW!'
}
}
console.log(game())