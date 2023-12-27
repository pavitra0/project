"use strict";

// document.querySelector('body').style.backgroundColor ="#333"

// Data needed for a later exercise

// Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderBySpreadOp: function (ing1, ing2, ing3) {
//     console.log(`heres your order with ${ing1}, ${ing2} and ${ing3}`);
//   },
// };
// //destructure them
// const [a, b] = restaurant.order(3, 1);
// // console.log(a,',',b);

// //spread oprator
// const arr = [1, 2, 3, 4, 5];
// const newArr = [69, ...arr];////////////////////
// console.log(...newArr)
//spread with function
// const ingredients = [
//   prompt("ingredients 1?"),
//   prompt("ingredients 1?"),
//   prompt("ingredients 1?"),
// ];

// restaurant.orderBySpreadOp(...ingredients)
//spread with string

// let str = 'pavitra'
// const letter = [...str]
// console.log(letter)

////////////////Challenge 1//////////////////////
// const [players1, players2] = game.players;
// // console.log(players1,players2)
// const [gk, ...fieldPlayers] = players1;
// // console.log(fieldPlayers)
// // console.log(gk)
// // const [...allplayers] = game.players
// const allplayers = [...players1, ...players2];
// console.log("allPlayers", allplayers);
// // const [playersFinal,]

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(
//   team1,
//   draw,
//   team2
// )

// function printing(...players){
//   console.log(`players =>${players} goals=> ${players.length}`)
// }
// printing("Lewandowski", "Gnarby", "Lewandowski", "Hummels" )
///////////////////////////////////////////////////////////
//STRING CHALLENGE
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
  
const fun = (str) =>  str.slice(0,3).toUpperCase()


  for(const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';')
    const output = `${type.startsWith('_Delayed') ? '⛔':''}${type.replaceAll('_',' ' )} ${fun(from)} ${fun(to)} (${time})`.padStart(40)
    console.log(output)
}
/////////////////////////////////////////////////////////
//   Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
//      underscoreCase ✅
//          firstName ✅✅
//      someVariable ✅✅✅
//     calculateAge ✅✅✅✅
//delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK 😀

// const data = 'user_pavitra'.toLowerCase()

// let splited = data.split('_')
// // splited.trim()

// const firstChar = splited[1].charAt(0).replace().toUpperCase().trim()

// console.log(splited,firstChar)
// let joined = `${splited[0] }${firstChar.trim()} ${splited[1].trim().slice(-2)}`
// console.log(joined)

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");

//   // console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(30 ,' ')}${"👍".repeat(i + 1)}`);
//   }
// });
////////////////////////////////////////////
//STRING
// const str = 'A Programmer Should Programmer'
// const str2 = 'be Consistant'
// const str3 = `${str}${str2}`

// console.log(str.toLowerCase().replaceAll('programmer', "coder"))
// console.log(new Set(...str))
// console.log(str3.length)
// console.log(str.lastIndexOf('r'))
// console.log(str.indexOf('P'))
// console.log(str.concat(str2))
// console.log(str.slice(1 ,11+1))

// function checkEmail(e1,e2){
//  if(e1 === e2){
//   console.log('true')
//  }
//  else{
//   console.log(false)
//  }
// }
// checkEmail('jhdkf', 'kjbdcks')
//////////////////CHALLENGE 3 /////////////////////////////////
const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);
// const events = [...new Set(gameEvents.values())]
// console.log(events)
// gameEvents.delete(64)
// console.log(gameEvents)
// console.log('number 64 was removed')

// console.log(
//   `An event happened, on average, ${90/gameEvents.size } minutes`
// )

// for(let [time, event] of gameEvents.entries()){
//   time = time > 45 ? `SECOND HALF ${time}` : `FIRST HALF ${time}`;

//   console.log(`${time}: ${event}`)
// }

////////////////CHALLENGE 2//////////////////////////////
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
//  for(const [i, player] of game.scored.entries() ){
//   console.log(`Goal ${i+1}: ${player}`)
//  }

//2.
//   const odds = Object.values(game.odds)
//   // console.log(odds)
//   // console.log(odds.values())
//   let average = 0
// for(const odd of odds)
//   average += odd;
//   average /= odds.length;
//   console.log(average)
//3.

// for(const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'Draw' :`Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`)
// }

/////////////////SET  /////////////////////////

// const newSet =  new Set(['a','b','c', 'd','s','a'])
// console.log(newSet)
// console.log(newSet.has('b'))
// console.log(newSet.add('pavitra'))
// console.log(newSet.size)
// newSet.forEach((el)=>{
//   console.log(el)
// })
// console.log(newSet.delete('s'))
// console.log(newSet)

// console.log(new Set('pavitra rathod'))//duplicate values will be removed automaticallt
// console.log(new Set('pavitra rathod').clear)//duplicate values will be removed automaticallt

//////////////////Map //////////////////////////////

// const mapp = new Map()
// mapp.set(1, 'pavitra')
// mapp.set(true, 'this is true')
// mapp.set(game, 'array')
// console.log(mapp.set(3, 'anime'))
// mapp.set('str', 'undifined')

// console.log(mapp.get(1))
// console.log(mapp.size)
// console.log(new Map(set()))

console.log('hi')
////////////////////////revstr/////////////////

let str = ' ';
const func = (str)=>{
  for(const i of str){
    str += i[str]
  }
  return console.log(str)
}


func('pavitra')