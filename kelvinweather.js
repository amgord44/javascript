//todays forecast
const kelvin = 0;
//celsius is 273 - kelvin
const celsius = kelvin - 273;
//calculating
let fahrenheit = celsius * (9/5) + 32;
//convert fahrenheit to round number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
