function getComputerChoice(){
    character = Math.floor(Math.random() * 3);
    if (character === 0){
        character = 'sorcerer';
    } else if (character === 1){
        character = 'fighter';
    } else{
        character = 'summoner'
    }
    return character;
}
function playRound(_playerSelection,_computerSelection){
    _computerSelection = getComputerChoice()
    _playerSelection = prompt('Choose your bet: ').toLowerCase();
    if (_playerSelection === 'sorcerer' && _computerSelection === 'sorcerer'){
        return "The Sorcerer's magic resulted into a draw!";
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'fighter'){
        return "The Fighter was no match against the Sorcerer!";
    } else if (_playerSelection === 'sorcerer' && _computerSelection === 'summoner'){
        return "The Summoner's summons outpowered the Sorcerer!!";
    } else if (_playerSelection === 'fighter' && _computerSelection === 'sorcerer'){
        return 'Magic outpowered your fist!';
    } else if (_playerSelection === 'fighter' && _computerSelection === 'fighter'){
        return "They fought 'til the end but no one won!";
    } else if (_playerSelection === 'fighter' && _computerSelection === 'summoner'){
        return 'Even the summoned minions were vanished!';
    } else if (_playerSelection === 'summoner' && _computerSelection === 'sorcerer'){
        return 'The Summoner summoned VICTORY!';
    } else if (_playerSelection === 'summoner' && _computerSelection === 'fighter'){
        return 'Fighter easily destroyed Summoner!';
    } else{
        return 'Even with great summons it still resulted into a draw!';
    }
}
playRound()
