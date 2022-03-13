const user = {
  name: "john",
  verified: true  
};

const userMap = new Map([
  ["name", "john"],
  ["verified", true]  
]);

console.log(userMap.size);


const user1 = { name: "john" }
const user2 = { name: "mary" }

const secretKey1 = "asldjfalskdjf";
const secretKey2 = "alksdjfakjsdf";

const secretKeyMap = new Map([
  [user1, secretKey1],
  [user2, secretKey2]  
]);

const key = secretKeyMap.get(user1);
console.log(key);

const map1 = new Map([
  [1, 1],
  [true, true]  
]);

map1.set('key', 'value');

map1.forEach((value, key) => {
  console.log(key, value);  
});



//favouritePlace 

const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const favouritePlaceMap= new Map ([
    ['music', "jazz"],
    ['name',"Parix House"]
]);

musicUser.set('visited',true);
musicUser.set('averageBill',0);
console.log(musicUser.get('averageBill'));
