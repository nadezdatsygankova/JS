const getSleepHours = (day) => {
  if(day === 'monday'){
    return 8;
  }else if (day === 'tuesday'){
    return 7;
  }else if (day === 'wednesday'){
    return 7;
  }else if (day === 'thursday'){
    return 7;
  }else if (day === 'friday'){
    return 7;
  }else if (day === 'saturday'){
    return 7;
  }else if (day === 'sunday') {
    return 8;
  }else{
    return "Error";
  }
}

const getActualSleepHours = () =>{
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

}

const getIdealSleepHours = (num) => {
  let idearHours = num;
  return idearHours * 7;
}

const calculateSleepDebt = () =>{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if(actualSleepHours === idealSleepHours ){
    console.log(`You got ${actualSleepHours} hour(s). The perfect amount of sleep`);
  }else if(actualSleepHours < idealSleepHours ){
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest`);
  }else{
    console.log("You got more sleep than needed");
  }
}

calculateSleepDebt();
