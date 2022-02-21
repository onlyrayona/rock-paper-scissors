function computerPlay(){

    //generate random number between 1 and 3    
    let x = Math.floor(Math.random()*3)+1;

    let computerSelection;

    //generate computerSelection based on random number

    if (x ==1){
        computerSelection = 'Rock';
    }
        else if(x == 2){
                computerSelection = 'Paper';
        }
            else if(x ==3){
                    computerSelection = 'Scissors';
            }
    return computerSelection;       
}

function capitalize(a){

    let x = a.slice(0,1);
    let y = x.toUpperCase();
    
    let z = a.slice(1);
    let b = z.toLowerCase();
    
    return y+b;
}

function playRound(noFormatPlayerSelection,computerSelection){
    let result;

    //accept any input and reformat to first letter capitalized
    let playerSelection = capitalize(noFormatPlayerSelection);

    if (computerSelection == 'Rock' && playerSelection =='Rock' ||
        computerSelection == 'Paper' && playerSelection == 'Paper' ||
        computerSelection == 'Scissors' && playerSelection == 'Scissors')
        {
            result = "It's a tie!";
        }

        else if(computerSelection == 'Rock' && playerSelection =='Paper' ||
        computerSelection == 'Paper' && playerSelection == 'Scissors' ||
        computerSelection == 'Scissors' && playerSelection == 'Rock')
        {
            result = "You win! " + playerSelection + " beats " + computerSelection;
        } 
        else {
            result = "You lose! " + computerSelection + " beats " + playerSelection;
        }
    return result;
}

function game(){
       
    for (let i = 0; i <5; i++){
        playerSelection = window.prompt("Make your selection");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();


