//declare myAge
const myAge = 38;
//first 2 years
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;
//calculate later years
laterYears*=4;

let myAgeInDogYears = earlyYears + laterYears;
//convert to Lower Case my name
const myName = 'Nadia'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years wich is ${myAgeInDogYears} years old in dog years.`);
