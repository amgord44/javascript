let count = 0;
document.addEventListener('DOMContentLoaded', () => {
    
const value = document.querySelector('#value');
const decrease = document.getElementById('btnD');
const reset= document.getElementById('btnR');
const increase = document.getElementById('btnI');

decrease.forEach(function (btnD) {
btnD.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')) {
        count--;
    }

value.textContent = count;
});
 });
});

 
    