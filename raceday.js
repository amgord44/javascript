let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 19;
if (runnerAge > 18 && earlyReg === true) {
  console.log(raceNumber + 1000);
}
if (runnerAge > 18 && earlyReg === true) {
  console.log(`You will race at 9:30 am and your number is ${raceNumber}.`);
} else if (runnerAge > 18 && earlyReg === !true) {
  console.log(`You will race at 11:00 am and your number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm and your number is ${raceNumber}.`);
} else {
  console.log("See registration desk!");
}
