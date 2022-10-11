const getUserChoice = (userInput) =>{
     userInput = userInput.toLowerCase();
     if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ){
return userInput;
     }else{
       console.log("Error")
     }
}

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random()*3);
 if (randomNumber == 0){
   return 'rock;'
 }else if(randomNumber == 1){
   return 'paper';
 }else{
   return 'scissors'
 }
}

const determineWinner = (userChoice, computerChoice) =>{
 if(userChoice === computerChoice){
   return 'the game was tie';
 }
 if(userChoice === 'rock'){
   if(computerChoice === 'paper'){
     return "Computer won";
   }else{
     return "User won";
   }
 }else if(userChoice === 'paper' ){
   if(computerChoice === 'rock'){
     return "User won";
   }else{
     return "Computer won";
   } 
 }else if(userChoice === 'scissors' ){
   if(computerChoice === 'rock'){
     return "Computer won";
   }else{
     return "User won";
   } 
 }else {
   return "User won";
 }
}

const playGame = () =>{
let userChoice = getUserChoice('bomb');
let computerChoice = getComputerChoice();
console.log(determineWinner(userChoice,  computerChoice));
}
playGame();
