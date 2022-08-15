const months = [
    'January',
    'February', 
    'March',
    'April',
    'May', 
    'June',
    'July',
    'August', 
    'September',
    'October', 
    'Novemeber',
    'December'
];

const weekdays = [
    'Monday', 
    'Tuesday',
    'Wednesday',
    'Thurday', 
    'Friday',
    'Saturday', 
    'Sunday'
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2022, 5, 12, 07, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway Ends ${weekday} ${date} ${month} ${year} ${hours}: ${mins}`;
// future time in millsec
const futureTIme = futureDate.getTime();

function getRemainingTime() {
const today = new Date().getTime();
const t = futureTIme - today;


//value in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMin = 60 * 1000;
//calcuate all values
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMin);
let sec = Math.floor((t % oneMin) / 1000);

// set value array
const value = [days, hours, minutes, sec];
function format(item) {
    if(item < 10){
        return item = `0${item}`
    }
    return item
}
/*items.forEach(function(item, index){
    item.innerHTML = value[index]
});
if(t  < 0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class= 'expired'> has expired</h4>`;
}

// countdown
//let countdown = setInterval(getRemainingTime, 1000)*/
}
getRemainingTime();