let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score'); 
const computerScore_span = document.getElementById('computer-score'); 
const scoreBoard_div = document.querySelector('score-board');
const result_div = document.querySelector('.result > p');
const rockbtn = document.getElementById('r');
const paperbtn = document.getElementById('p');
const scissorbtn = document.getElementById('s');

function getcomputerChoice() {
    const choices = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function convert(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 's') return 'Scissor';
    return 'Paper';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice)+ ' beats ' + convert(computerChoice) + '. You win!';
}
function lose() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(userChoice)+ ' beats ' + convert(computerChoice) + '. You Lose!';
}
function draw() {

}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
       win(userChoice + computerChoice);
        break;
        case 'rp':
        case 'ps':
        case 'sr':  
        lose(userChoice + computerChoice);
        break;
        case 'rr':
        case 'ss': 
        case 'pp':
        draw(userChoice + computerChoice);
            break;
    }  
}
     
function main() {
rockbtn.addEventListener('click', function() {
   game('r');
})
paperbtn.addEventListener('click', function() {
    game('p');
})
scissorbtn.addEventListener('click', function() {
    game('s');
})
}
main();
    



