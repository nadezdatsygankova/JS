const blue = '#00f';
const orange = '#f60';

// variables - boxes; objects - file cabinets

const colors = {yellow: '#ff0',blue,orange}
console.log(colors);

// objectName.key
console.log(colors.yellow);


// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console

const bar = 'Craft';
const cafe ='Cafe';
const restaurant = 'Moon';

const favouritePlaces ={
    bar, cafe, restaurant,
    greeting(){
        console.log(`Hi! Happy to see you in the ${bar}`);
    }
}

favouritePlaces.greeting()
console.log(favouritePlaces.bar);
console.log(favouritePlaces.cafe);
console.log(favouritePlaces.restaurant);
