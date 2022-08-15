const getSleepHours = (day) => {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 10;
    } else if (day === "wednesday") {
      return 8;
    } else if (day === "thursday") {
      return 8;
    } else if (day === "friday") {
      return 8;
    } else if (day === "saturday") {
      return 8;
    } else if (day === "sunday") {
      return 8;
    }
  };
  //console.log(getSleepHours('sunday'));
  const getActualSleepHours = () => {
    return (
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday")
    );
  };
  console.log(getActualSleepHours());
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect');
  } else if (actualSleepHours > idealSleepHours) {
  console.log('got more sleep than needed');
  } else {
    console.log('need more sleep');
  }
  };
  calculateSleepDebt();