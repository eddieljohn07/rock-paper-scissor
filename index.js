function getComputerChoice(){
    character = Math.floor(Math.random() * 3);
    if (character === 0){
        character = 'sorcerer';
    } else if (character === 1){
        character = 'fighter';
    } else{
        character = 'summoner'
    }
    console.log(character);
}
function playRound(){
    _computerSelection = getComputerChoice()
    _playerSelection = prompt[('Choose your figher: ').toLowerCase]
    if (_playerSelection === 'sorcerer' && _computerSelection === 'sorcerer'){
        console.log("The Sorcerer's magic resulted into a draw!");
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'fighter'){
        console.log("The Fighter was no match against the Sorcerer!");
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'summoner'){
        console.log("The Summoner's summons vanished along with them!")
    }
}
console.log(playRound());
