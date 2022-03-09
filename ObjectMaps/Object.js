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



//Destructuring

const user = {
  name: "Reed",
  username: "Reedbarger",
  email: "reed@gmail.com",
  details: {
    title: "Programmer"  
  }  
};

// const { title } = user.details
// const { name, details: { title} } = user;

function displayUserBio({ name, details: {title} }) 
{
  console.log(`${name} is a ${title}`); 
}

displayUserBio(user);


// Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
// organized by what you'd like to do (eat pancakes, drink coffee etc).

// 1. Destructure the places to drink (coffee and beer) from recommendations
// 2. Destructure the places to listen to music
// 3. Write a function that takes the recommendations object as an argument and that
//      a) Logs out the music venues in recommendations when invoked 
//      b) Uses object descructuring to get the "traditional" and "jazz" keys from the argument

const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}

const {coffee, beer, music: {traditional, jazz}} = recommendations;

function displayMusicPlaces({music:{traditional, jazz}}){
    console.log(`Music: ${traditional}, ${jazz}`)
}

playMusic(recommendations);
