const colors = ['green','blue','red', 'purple', 'yellow'];
const color = document.querySelector('.color');


document.addEventListener('DOMContentLoaded', () => { 
const btn = document.getElementById('click');
btn.addEventListener('click', () => {
    const random = getrandom();
    document.body.style.backgroundColor = colors[random];
    
});
});
function getrandom(){
return Math.floor(Math.random() * colors.length);
}
 
