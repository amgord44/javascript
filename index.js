const uScore = 0;
const cScore = 0;
const userScore_span = document.getElementById('user-score'); 
const computerScore_span = document.getElementById('computer-score'); 
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.getElementById('.result');
const buttonr= document.getElementById("r");
//buttonr.addEventListener('click', )= function();
const buttonp= document.getElementById('p');
const butttns= document.getElementById('s');


function computerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3)
    return choices [random];
}
function game(userChoice) {
    const cpuChoice = computerChoice();
    switch(userChoice + cpuChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
        console.log('You win');
        break;
        case 'rp':
        case 'ps':
        case 'sr':  
        console.log('you lose');
        break;
        case 'rr':
        case 'ss': 
        case 'pp':
            console.log('tied');
            break;
    }
     
}
game('');
/*function main() {
btnr.addEventListener('click', function() {
    game('r');
})
}
main(); */