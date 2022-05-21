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


let futureDate = new Date(2022, 4, 30, 07, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
let weekend = weekdays[futureDate.getDay()];


giveaway.textContent = `Giveaway Ends ${weekend} ${date} ${month} ${year} ${hours}: ${mins}PM`;
// future time in millsec
const futureTIme = futureDate.getTime();

function getRemainingTime() {
const today = new Date().getTime();
const t = futureTIme - today;
  

}
getRemainingTime();