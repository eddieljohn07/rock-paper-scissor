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
        console.log("The Sorcerer's magic resulted into a draw!");
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'fighter'){
        playerScore++
        console.log("The enemy\'s Fighter was no match against your Sorcerer!");
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'summoner'){
        computerScore++
        console.log("Your Summoner's summons outpowered the Sorcerer!!");
    } else if (_playerSelection === 'fighter' && _computerSelection === 'sorcerer'){
        computerScore++
        console.log('The enemy\'s Magic broke your Fighter\'s fist!');
    } else if (_playerSelection === 'fighter' && _computerSelection === 'fighter'){
        console.log("They fought 'til the end but no one won!");
    } else if (_playerSelection === 'fighter' && _computerSelection === 'summoner'){
        playerScore++
        console.log('Even the summoned minions were vanished by your Fighter!');
    } else if (_playerSelection === 'summoner' && _computerSelection === 'sorcerer'){
        playerScore++       
        console.log('Your Summoner\'s summons win!');
    } else if (_playerSelection === 'summoner' && _computerSelection === 'fighter'){
        computerScore++
        console.log('Enemy\'s Fighter easily destroyed your Summoner!');
    } else{
        console.log('Even with great summons it still resulted into a draw!');
    }
}
const game = () => {
for (let i = 0; i < 5; i++) {
    playRound()
}
if (playerScore > computerScore){
    return 'Congratulations! You\'ve chosen the correct set of characters that led you to VICTORY!';
}else if (playerScore < computerScore){
    return 'Oh no! The opponent chose a better set of characters that led you to your DEFEAT!'
} else {
    return 'Woah! That was a close one, but it is still a DRAW!'
}
}
console.log(game())