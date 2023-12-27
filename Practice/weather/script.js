// const html = `  <div class="h-60 bg-zinc-800 p-6 rounded shadow-md">
//                 <h1 class="text-2xl font-bold mb-14">Weather Information.</h1>

//                 <!-- Weather Data -->
//                 <div class="flex items-center">
//                     <!-- Icon (assuming you have an icon URL) -->
//                     <img src="https://example.com/weather-icon.png" alt="Weather Icon" class="w-16 h-16 mr-4">

//                     <!-- Weather Details -->
//                     <div>
//                         <p class="text-lg font-semibold mb-2">City Name</p>
//                         <p class="text-gray-700 mb-2">Temperature: 25°C</p>
//                         <p class="text-gray-700">Description: Partly Cloudy</p>
//                     </div>
//                 </div>
//                 </div>`;
// const body = document.querySelector('body')

// body.addEventListener('click', function(){
//     console.log('hi')
// })
// const city = 'mumbai'

// fetch(`api.openweathermap.org/data/2.5/weather?q=London&mode=json&ecd2400cfb474698ec1855c90c1af134`).then((res) => res.json()).then(data => console.log(data))

// let bill = 275
// bill = 439
// const tip = bill >= 50 && bill <= 300 ? ((15 / 100  ) * bill).toFixed(2) : ((20 / 100  ) * bill).toFixed(2)
// console.log(`The bill was ${bill}, the tip was ${tip} and the total is ${+(bill) + +(tip)}`)

// function calcAve(teamArr){
//     return teamArr.reduce((acc, cur, _, arr) => Math.trunc(acc+ cur/ arr.length) , 0)
// }
// function checkWinner(avgKoalas, avgDolphins) {
//  const string = avgDolphins >= 2 * avgKoalas ? 'Dolphins' : 'Koalas'

//  return `${string} win (${avgDolphins} vs. ${avgKoalas})`
// }
// const Koalas = calcAve([65,54,27])
// const Dolphins = calcAve([44,23,71])

//JS fundamental 2

//challenge 2
// function calcTip(bill) {
//   const tip =
//     bill >= 50 && bill <= 300
//       ? ((15 / 100) * bill).toFixed(2)
//       : ((20 / 100) * bill).toFixed(2);
//   return tip;
// }

// const bills = [125, 555, 44]
// const tips = [];
// bills.map(arr => tips.push(calcTip(arr)))

// const total = [bills[0] + +(tips[0]),bills[1] + +(tips[1]),bills[2] + +(tips[2])]
// console.log(total)

//challenge 3
// const mark = {
//   fullname:'Mark Miller',
//   mass: 78,
//   height:1.69,
//   calcBMI: function (){
//     const BMI = this.mass / this.height ** 2
//   this.BMI = BMI
//   }
// }
// mark.calcBMI()

// const john = {
//   fullname:'John Smith',
//   mass: 92,
//   height:1.95,
//   calcBMI: function (){
//     const BMI = this.mass / this.height ** 2
//     this.BMI = BMI
//   }
// }
// john.calcBMI()
// console.log(john)

// if(mark.BMI > john.BMI){
//   console.log(`mark BMI (${mark.BMI}) is higher than john's (${john.BMI})`)
// }
// else{
//   console.log(`johns BMI (${john.BMI}) is higher than marks's (${mark.BMI})`)
// }

//challenge 4
// function calcTip(bill) {
//   const tip =
//     bill >= 50 && bill <= 300
//       ? ((15 / 100) * bill).toFixed(2)
//       : ((20 / 100) * bill).toFixed(2);
//   return tip;
// }
// const bills = [22,295,176,440,37,105,10,1100,86,52]
// const tips = []
// for(let i =0; i<bills.length; i++){
//        tips.push(calcTip(bills[i]))
// }
// const total = []
// for(let i=0; i<tips.length; i++){
//   total.push(+(tips[i]) + bills[i])
// }
// console.log(total)

// function calcAverage(arr){
//   let first = 0
//   for(let i = 0; i<arr.length; i++){
//   first = first + arr[i] /arr.length
// }
// console.log(first)

// }
// calcAverage([7,6,53,24])

//datastructuring

//Challenge 1

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];
// const [gk, ...fieldPlayers] = players1;
// // console.log(gk,',', ...fieldPlayers)
// const allPlayers = [...players1, ...players2];
// // console.log(allPlayers)
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// // console.log(players1,players2)
// // console.log(players1Final)
// // console.log(game.odds)
// const { team1, x: draw, team2 } = game.odds;
// // console.log(team1,draw,team2)

// function printGoals(...names) {
//   return `${names.length} goals were scored by ${names.join(", ")}`;
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// // printGoals(...game.scored)

// const toPrint = printGoals(...game.scored);
// //DOM
// const body = document.querySelector('.div')
// const h1 = document.createElement('h3')
// h1.textContent = toPrint
// body.prepend(h1)

// //IF Else or ternary operator alternative

// // team1 > team2 && console.log('team2 is more likely to win.')
// // team1 < team2 && console.log('team1 is more likely to win.')

// //challenge 2
// // for (let i = 0; i < game.scored.length; i++) {
// //   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// // }
// const odds = game.odds

// // let avg = 0

// // for(const i of Object.values(odds)){
// //     avg += ( i /3)
// //   }
// //   console.log(avg)

// // for(const [key, value] of Object.entries(odds)){
// //   if(key === 'team1'){
// //     console.log(`Odd of victory bayern munich: ${value}`)
// //   }
// //   else if(key === 'x'){
// //     console.log(`Odd of Draw: ${value}`)
// //    }
// //    else{
// //     console.log(`Odd of victory Borrussia Dortmund: ${value}`)
// //    }
// // }
// // for (const [i, j]of Object.entries(odds)) {
// //     const string = i === 'x' ? 'draw' : `Victory belongs to ${game[i]}`
// //     console.log(`Odd of ${string}: ${j}`)
// //  }
// const scorers = {}
// game.scored.map(i => scorers[i] = (scorers[i] || 0) + 1 )
// console.log(scorers)

///////////////////////
//challenge 3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
//   ]);

// const events = new Set(gameEvents.values())
// console.log(events)

// // console.log(gameEvents.has(64))
// gameEvents.delete(64)
// // console.log(gameEvents)

// console.log(`An event happened, on
// average, every ${Math.trunc(90 / gameEvents.size)} minutes `)

// gameEvents.forEach((i,j)=>{
//   const half = j <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'
//   console.log(`${half}${j}: ${i}`)
// })
const container = document.querySelector('.login')
container.append(document.createElement("textarea"));
container.append(document.createElement("button"));
container.append(document.createElement("div"));

//MY function that is useless

// function makeUnderscore(string){
//     string.trim()
//     string.split('\n')
//     for(let i=0;i<string.length;i++){
//         if(string[i] === '_'){
//         console.log(string.split('_')[0] + string.split('_')[1].charAt(0).toUpperCase() + string.split('_')[1].slice(1,string.length) )
//         }
//     }
// }
// makeUnderscore('pavitra_score')

const input = document.querySelector("textarea");
const btn = document.querySelector("button");
// const disp = document.querySelector('div')
const passContainer = document.querySelector('.pass')
const passInput = document.getElementById('pass')

const myPassword = 'pavitra808'

passInput.addEventListener('change', function(){
  if(passInput.value === myPassword){
  passContainer.style.opacity = 0;
  container.style.filter = `blur(0px)`
  }
})

btn.textContent = "add";

function makeUnderscore(string) {
  const rows = string.split("\n");
  for (const [i,row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)} ${'😭'.repeat(i + 1)}`)
  
}


}

btn.addEventListener("click", function () {
  if (input.value === "") {
    disp.innerText = 'type!!';
  } else {
    makeUnderscore(input.value);
  }
  input.value = ''
});



//Array challenges
const numberArray = [10, 5, 15, 15, 20, 25, 30, 35];
// const stringArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

//1.
// const numberArray = [5, 10, 15, 20, 25, 30, 35];
// function reverse(array){
//   console.log([array.reverse()])
// }
// reverse(numberArray)
//2.
// function maxMin(array){
//   const min = Math.min(...array)
//   const max = Math.max(...array)
//   console.log(min, max)
// }
// maxMin(numberArray)

//3.
// const even = (array) => array.filter((a,i) => {
//   if(i = a % 2 === 0 )
//   console.log(a)})
// even(numberArray)

//4.
// const sum = array => {
//   let cur = 0
// for(let i =0; i< array.length; i++){
//   cur += array[i]
// }
// console.log(cur)
// }
// sum(numberArray)

//5.
// function noDuplicates(array){
// //
// console.log([...new Set(array)])
// }
// noDuplicates(numberArray)

//6.
// function rotate(array){
// array.unshift(array.pop())
// console.log(array)
// }
// rotate(numberArray)

//7.
// function chunk(array, size){
//     const sliced = array.splice(0, array.length/size)
//     console.log(sliced, array)
// }
// chunk(numberArray,2)

//8.
// const myArr = [5,10,5,3]
// function intersect(array1, array2){
//     let newArray = []
//     for(let i =0; i<array1.length; i++){
//         if(array1[i] === array2[i]){
//         newArray[i] = array1[i]
//         }
//     }
//     console.log(newArray)
// }
// intersect(numberArray,myArr)

//9.
// const nestedArray = [
//     [[1, 2], 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
// function flatten(array){
//     console.log(array.flat(array.length))
// }
// flatten(nestedArray)

//10.
// function Palindrome(arr1,arr2){

// }
// Palindrome(numberArray,numberArray)

// //11.
// function shuffle(array,round){
//     for(let i =0; i<round; i++){
//         array.unshift(array.pop())

//     }
//     console.log(array)
// }
// shuffle(numberArray,4)

//13.
// function bubbleSort(arr){
//     for (let i = 0; i < arr.length - 1; i++){

//         let swapped = false

//         for (let j = 0; j < arr.length - i - 1; j++){
//             // swapping the elements
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 swapped = true
//             }
//         }

//         // if no elements are swapped
//         // that means our array is sorted
//         if(!swapped) break;
//     }

//     return arr
// }
// // console.log(bubbleSort(numberArray))
// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const randomNumbersArray = Array.from({ length: 5 }, () => getRandomNumber(0, 20));

// console.log(randomNumbersArray)

// function zeroNot(array){
// if(array.includes(0)){
//     for(let i = 0; i<array.length; i++){
//     if(array[i] === 0){
//          val = array.shift()
//     }
// }
// array.push(val)
// }
// console.log(array)
// }
// zeroNot([0,0,94,32])
