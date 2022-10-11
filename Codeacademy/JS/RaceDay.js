let raceNumber = Math.floor(Math.random() * 1000);
let isRegister = true;
let age = 18;
if(age >= 18 && isRegister){
  raceNumber+=1000;
}
if(age >=18 && isRegister ){
  console.log(`You will be race at 9:30 am. Your number is ${raceNumber}`);
}else if(age >=18 && !isRegister){
   console.log(`You will be race at 11:00 am. Your number is ${raceNumber}`);
}else{
  console.log(`You will be race at 12:30 am. Your number is ${raceNumber}`);
}
