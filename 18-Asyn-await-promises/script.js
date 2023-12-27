'use strict';
//       },3000)
//     // console.log(img)

//   })
/////////////////////////////////////////////////////
//string method
// num2
// const string = 'STRINg'
// const num =3
// console.log(string.toLowerCase())
// console.log(string.toUpperCase())
// console.log(string.charAt(1))
// console.log(string.indexOf('R',0))
// console.log(string.lastIndexOf('N'))
// console.log(string.substring(0,1))
// console.log('slice',string.slice(1,4))
// console.log(num.toString())
// console.log(string.split(''))
// console.log(string.includes('k',2))
// console.log(string.at('k'))
// console.log(string.concat('=> k'))
// console.log(string.trim())
// console.log(string.padEnd(9," "))
// console.log(string.padStart(9," "))
// console.log(string.replace("g", 'G'))
// console.log('Array'.replaceAll("r", 'R'))
// console.log(string.repeat(5))
// console.log(string.charCodeAt(2))
// Promise.resolve()
//////////////////////////////////////////////////
//Array method
// const arr = [1,2,3,4,5]

// console.log(arr.map(arr => arr *8))
// console.log(arr.filter(arr => arr % 2 === 0))
// console.log(arr.reduce((acc, cur, i, arr) => acc + cur,0))
// console.log([2,3,[3,7]].flat())
// console.log([2,3,[3,7]].flatMap(arr => arr ))
// console.log(arr.unshift(3))
// console.log(arr.shift())
// console.log(arr.shift())
// console.log(arr.splice(2,1))

// const key = "myKey";

// let obj = {};
//  //obj.myKey = 10;
// // //  for(let i in obj){
// //   if(!obj[i]){
// //     obj[i] = 1
// //   }
// //   else{
// //     obj[i]++
// //   }
// //  }
// //  console.log(obj)

// obj[key] = 10
// }).catch((err) => console.error(err))

// }
// createImage('img/img-2.jpg')

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const container = document.querySelector('.container');

///////////////////////////////////////

// const funcCountries= (country) => {
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://restcountries.com/v3.1/name/${country}`
// );
// request.send();
// request.addEventListener('load', function () {
//   const [,data] = JSON.parse(this.responseText)
//  console.log(data)
//   const html =` <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name['common']}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages['hin']}</p>
//     <p class="country__row"><span>💰</span>${data.currencies.INR['name']}</p>
//   </div>
// </article>`

// countriesContainer.insertAdjacentHTML('beforeend',html)
// countriesContainer.style.opacity = 1
// });
// }
// funcCountries('india')
// funcCountries('portugal')



// const getJSON = (url, errMsg = 'Something wnet Wrong!') => {
//   return fetch(url).then(res => {
//     if (!res.ok) throw new Error(`${errMsg} => ${res.status}`);

//     return res.json();
//   });
// };
// const renderCountry = (data, className = '') => {
//   const html = `
//   <article class="${className}">
//     <img class="country__img" src="${data.timezone}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.city}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${data.staddress}</p>
//       <p class="country__row"><span>🗣️</span>${data.latt}</p>
//       <p class="country__row"><span>💰</span>${data.longt}</p>
//     </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getNeibourCountry = (country) =>{
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://restcountries.com/v3.1/name/${country}`
// );
// request.send();
// request.addEventListener('load', function () {
//   const [,data] = JSON.parse(this.responseText)
//  console.log(data)

//   renderCountry(data)

//   const neigbour = data.borders?.[0]

//   //ajax call
//   const request2 = new XMLHttpRequest()
//   request2.open(
//     'GET',
//     `https://restcountries.com/v3.1/alpha/${neigbour}`
//   )
//   request2.send()

//   request2.addEventListener('load', function (){
//     const [data2] = JSON.parse(this.responseText)
//     console.log(data2)

//     renderCountry(data2,'neighbour' )
//   })

// });
// }
// getNeibourCountry('can')

// Welcome to Callback Hell

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// // getCountryAndNeighbour('india');

// const randomImg = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response){
//     console.log(response)
//     return response.json()
//   }).then(function(data){
//     console.log(data)
//   })
// }
// randomImg('india')

//  const request = fetch(`https://xeno-canto.org/api/2/recordings?query=cnt:brazil&page=5`)
//  request.then(response => response.json()).then(data => console.log(data))

///Challenge 1

// const whereAmI = function (lat, lng) {
//   const request = fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=563814968014263585135x18864`
//   );
//   request
//     .then(resolve => {
//       return resolve.json();
//     })
//     .then(data => {
//   if(!data.city) throw new Error('Not a valid coordinates')
//       console.log(data);

//       const result = `You are in ${data.city}, ${data?.country}`;
//       // if(!result) return error
//       console.log(result);
//       // renderCountry(data)
//     }).catch(err => console.error(err))
//     // .finally(() => {
//     //   console.log('finally will run ase bhi waise bhi');
//     // });
// };

// document.addEventListener('click', () => {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI()
//   whereAmI(-33.933,18.474);
// });

// Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

// function Car(speed, make) {
//   this.speed = speed || 0;
//   this.make = make;

//   this.display = function () {
//     console.log(`car company is ${this.make} and speed is ${this.speed}`);
//   };

//   this.speedIncrease = function (toIncrese) {
//     this.speed += toIncrese;
//     console.log(`${make} and speed:${speed}`);
//   };

//     this.speedIncrease = function (toDecrese) {
//       this.speed += toDecrese;
//       console.log(`${make} and speed:${speed}`);
//   }

// }
// let carmake = new Car(50, 'BMW');
// // console.log(carmake.speed)
// carmake.speedIncrease(40)
// carmake.display();

//////////////
///CHALLENGE 3

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };


// const loadNPause = async () =>{
//   try{
//     const img = await createImage('img/img-1.jpg')
//     console.log('Image 1 is loaded')
//     await wait(5) 
//     img.style.display = 'none'
    
//     const img2 = await createImage('img/img-2.jpg')
//     console.log('Image 2 is loaded')
//     await wait(3) 
//     img2.style.display = 'none'


//   }catch(err){
//     console.error(err)
//   }
// }
// // loadNPause()

// const loadAll = async (imgArr) => {
//   try{
//     const imgs = imgArr.map(async arr => await createImage(arr))
//     const imgEl = await Promise.all(imgs)
//     imgEl.forEach((el) => el.classList.add('parallel'))
//     console.log(imgs)

//   }catch(err){

//   }
// }

// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

// const promiss = new Promise((res,rej)=>{

//   if(Math.random() >= 1/2){
//     res('YOU WIN THE LOTTERY')
//   }
//   else{
//     rej('YOU\'VE LOST THE GAME')
//   }
// })

// promiss.then(res => console.table(res)).catch((err) => console.error(err))

// fetch(`https://api.api-ninjas.com/v1/randomword`).then(res => {
// if(!res.status === 404) throw new Error('Erroerj')
// return res.json()
// })
// .then(data => console.log(data))
// .catch(err => console.error(err))

// const createImage = (url,url2) => {

//     fetch(url).then(res => {
//       if(!res.ok) throw new Error(`IMAGE NOT FOUND!! ${res.status}`)
//     return res
//     }).then(data => {
//     const img = document.createElement('img')
//     img.setAttribute('src', url)
//     img.setAttribute('class','img-work')

//     img.addEventListener('load', function(){
//       countriesContainer.append(img)
//       countriesContainer.style.opacity =1

//         setTimeout(()=>{
//           countriesContainer.style.display = 'none'
//         },3000)
//       // console.log(img)

//     })
//     console.log(data)

//     return fetch(url2).then(res => res).then(data => {
//       const img = document.createElement('img')
//       img.setAttribute('src', url)
//       img.setAttribute('class','img-work')

//       img.addEventListener('load', function(){
//         countriesContainer.append(img)
//         countriesContainer.style.opacity =1

//           setTimeout(()=>{
//             countriesContainer.style.display = 'none'
//           },6000)
//         // console.log(img)

//       })
//     })

//   })
//   .catch((err) => console.error(err))

//   //   }

//   //   createImage('img/img-2.jpg')

// const wait = (num) => {
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve()
//     },num * 1000)
//   })
// }
// const second = (msg) =>{
//  return  new Promise((resolve, reject)=>{
//     resolve(msg)
//     reject(new Error('Somthing in the code'))
//   })
// }

// second('Hello').then(res => {
//   console.log(res)
//   return wait(3)
// }).then(res => {
//   console.log('waited for 3 seconds')
//   return wait(3)
// }).catch(err => console.error(err))

//////////////////////////////////////////////////////////////////////////

// const inputString = [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 6, 7, 8, 7, 9, 9];

// const obj = {}

// inputString.map(arr => {
//   if(!obj[arr]){
//     obj[arr] = 1
//   }
//   else{
//     obj[arr]++
//   }
// })
// console.log(obj)

// const flattenArray = (arr, depth) => {
//   return depth > 0
//     ? arr.flatMap(item => Array.isArray(item) ? flattenArray(item, depth - 1) : item)
//     : arr.slice();
// };

// console.log(flattenArray([1, [2, [3, 4], 5], 6], 3))

// let a = 5;
// let b = 10;
// b= 8
// a=9

// (function(type){
//  console.log(typeof type)
// })(0)
// (function(num){
//   console.log(num % 2 === 0)
// })(7)

// let sum = 10;
// (function(num){
//   sum += num
//   return sum
// })(1)
// console.log(sum)

// const gg = function(n1,n2,n3){
//   if(n1 > n2) {
//     console.log(n1)
//   }
//   else if(n2 > n3 ) {
//     console.log(n2)
//   }
//   else {
//    console.log( n3)
//   }
// }
// gg(44,55,7863)

// const num = 100
// for(let i = 1; i<100; i++ ){
//   if(3%i === 0){
//     console.log('Fizz')
//   }
//   else if(5%i === 0){
//     console.log('Buzz')
//   }
//   else if(5%i === 0 && 3%i === 0){
//     console.log("BuzzFizz")
//   }
//   else{
//     console.log(i)
//   }
// }

// function facto(num) {
//   let fact = 2;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   return fact;
// }
// console.log(facto(1));

/////////////////////////////////////////////////////////////////////////////
//JOke APi

// const displayMain = (disp) => {
//   const ht = `<div class="btn-country"><h1>${disp}</h1></div>`

//   countriesContainer.insertAdjacentHTML('beforeend', ht)
//   countriesContainer.style.opacity = 1
//   container.style.backgroundColor = '#232323'
// }

// /////////////////////////////////////////////////
// //Fetch api

// const randomId = Math.trunc(Math.random() * 10)

// const jokeApi = () => {
//   fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=explicit&type=single&amount=10')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.jokes)
//     console.log(data.jokes[randomId].joke)
//        displayMain(data.jokes[randomId].joke)

//   })
// }
// jokeApi()

//////////////////////////////////////////////////////////////

//setinterval

// let count = 0

// const interval = setInterval(()=>{
//   count++
//   console.log(`${count}`)
//   if(count === 9) {
//     clearInterval(interval)
//   }
// },1000)
// const toys = ['teddy bear', 'ball', 'blocks'];
// const [favoriteToy, secondFavorite] = toys;

// console.log(favoriteToy); // Outputs: teddy bear
// console.log(secondFavorite); // Outputs: ball
// console.log(typeof toys)
/////////////////////////////////////////////////////////

//using two apis with async await
// const whereAmI = async () => {
//   //geolocation
//   const pos = await getCurrentPosition();
//   console.log(pos);
//   const { lattitude: lat, longitude: lng } = pos.coords;

//   //reverse geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json()
//   console.log(dataGeo)
// };

// whereAmI();

///////////////////////////////////////////////////////////////////
//TrueCaller Api
// const TrueCaller = async () => {const url = 'https://truecaller.p.rapidapi.com/?id=16092070065';
// const getData = {}
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66f2eb84e7msh26a3fc2c31fe8c4p12ff16jsn8eb32bd3593e',
// 		'X-RapidAPI-Host': 'truecaller.p.rapidapi.com'
// 	},
// //   body: JSON.stringify(getData)
// };
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// TrueCaller()

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// const anime = async (name)=>{const url = `https://anime-db.p.rapidapi.com/anime?page=2&size=5&search=${name}&sortBy=ranking&sortOrder=asc`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '66f2eb84e7msh26a3fc2c31fe8c4p12ff16jsn8eb32bd3593e',
// 		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	// console.log(result.data[0]);name

//     renderCountry(result.data)
// } catch (error) {
// 	console.error(error);
// }

// }
// const animeName = prompt('Anime Name???')
// anime(animeName.toUpperCase())

////////////////////////////////////////////////////
//PROMISE COMBINATORS
//Promise all method
// const get3Countries  =  async (c1,c2,c3) => {
//   try{
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ])
//     console.log(data.map(d=> d[0].capital).join(', '))
//   } catch(err) {
//     console.error(err);
//   }
// }
// get3Countries('portugal','canada','nepal')

//Promise Race method
////////////////////////////////////////////////////////////////
//Practice
//array
// const numbersArray = [3, 7, 1, 8, 8, 4, 6, 2, 9, 5];
// const evenNumbersArray = [2, 4, 6, 8, 10];
// const mixedArray = [3, 'apple', true, 7, 'orange', false];

//1.
// const funcSum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)
// console.log(funcSum(numbersArray))
//2.
// const maxedFunc = (arr) => {
//  return arr.reduce((acc, cur) => Math.max(acc, cur),0)
// }
// console.log(maxedFunc(numbersArray))

//3.
// const evenArray = (arr) =>  arr.filter((arr) => arr % 2 === 0)
// console.log(evenArray(evenNumbersArray))

//4.
// const reverseArray = (arr) => arr.reverse()
// console.log(reverseArray(numbersArray))

// //5.
// const uniqueEl = (arr) => {
//   console.log(new Set([arr]))
// }
// console.log(uniqueEl(numbersArray))

// //object
// const sampleObject = {
//   name: 'John Doe',
//   age: 25,
//   city: 'Exampleville',
//   isStudent: true,
// };

// const anotherObject = {
//   country: 'Wonderland',
//   population: 1000000,
//   language: 'English',
// };
//1.
// const onlyValues = (obj) => Object.values(obj)
// console.log(onlyValues(sampleObject))

//2.
// const onlyKeys = (obj) => Object.keys(obj)
// console.log(onlyKeys(sampleObject))

//3.

// const merge = {...sampleObject, ...anotherObject}
// console.log(merge)

//4.
// const existKey = (key) => merge.hasOwnProperty(key)
// console.log(existKey("age"))

//5.
// const filteredOut = (arr) => arr.filter((arr) => arr > 12)
// console.log(filteredOut(merge))

//STRING
// const sampleString = 'Hello, world!';
// const sentenceWithPalindromes = 'A man, a plan, a canal, Panama';
// const longString = 'This is a long string with some repeating words. This string is for testing substring count.';

//1.
// const reverseStr = (str) => str.split('').reverse().join('')
// console.log(reverseStr('pavitra'))

//2.
// const arr = sampleString.split('')
// // console.log(str)

// for(let i = 0; i<arr.length; i++){
//   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

// }

// const str2 = arr.join('')
// console.log(str2)

//3.
// const countVowels = (string) => {
//   const exception = ['a','e','i','o','u']

//   for(let i = 0; i< string.length; i++){
//     if(i.includes(exception)){
//       console.log(`Vowels: ${i.includes(exception)}`)
//     }
//   }
// }
// countVowels(sampleString)

////////////////////////////////////////////////////////
//array
// const positiveNumbersArray = [3, 7, -1, 8, -4, 6, 2, -9, 5];
// const minimumNumbersArray = [12, 4, 8, 2, 10];
// const arrayWithDuplicates = [3, 7, 1, 8, 3, 6, 2, 7, 5];
// const arrayToSquare = [2, 3, 5, 7, 10];
// const evenNumbersArrayForSquares = [2, 4, 6, 8, 11];

//1.

// const allPosi = (arr) =>{
//  return arr.filter(arr => arr > 0).reduce((acc, cur)=> acc+cur,0)
// }
// console.log(allPosi(positiveNumbersArray))

//2.
// const minFunc = (arr) => {
//    return arr.reduce((acc, cur,i,arr) => Math.min(acc, cur), arr[0])
//   }
//   console.log(minFunc(minimumNumbersArray))

//3.
// const remDup = (arr) => new Set(arr)
// console.log(remDup(arrayWithDuplicates))

//4.
// const squareEach = (arr) => arr.map(arr => arr * arr)
// console.log(squareEach(arrayToSquare))

//5.
// const evenSqauare = (arr) => arr.filter(arr => arr % 2 === 0).map(arr => arr * arr)
// console.log(evenSqauare(evenNumbersArrayForSquares))

//objects
// const objectToGetLength = {
//   name: 'John',
//   age: 25,
//   city: 'Exampleville',
//   isStudent: true,
// };
// const objectToInvert = { a: 1, b: 2, c: 3 };
// const objectWithNumericValues = { apples: 5, oranges: 8, bananas: 3 };
// const objectToConvertCase = { firstName: 'John', lastName: 'Doe', age: 30 };
// const deepMergeObject1 = { a: { b: 1 } };
// const deepMergeObject2 = { a: { c: 2 }, d: 3 };

//1.
// const toGetLength = (ob) => Object.entries(ob).length
// console.log(toGetLength(objectToGetLength))

//2.
// const invertObj = (ob) => {
// for(let [key, value] of Object.entries(ob)){
//   console.log(`${value}: ${key}`)
// }
// }
// invertObj(objectToInvert)

//3.
// const sumOfVal = ob => Object.values(ob).reduce((acc, cur) => acc + cur, 0);
// console.log(sumOfVal(objectWithNumericValues))

//4.
// const capkeys = (ob) => String(Object.keys(ob)).toUpperCase()
// console.log(capkeys(objectToConvertCase))

//5.
// const deepMerge = (ob1, ob2) => {
 
//   const newObj = {...ob1, ...ob2 }
//   	return newObj
// }
// console.log(deepMerge(deepMergeObject1,deepMergeObject2))

//String
// const sentenceForLongestWord = 'The quick brown fox jumps over the lazy dog'.split(' ');
// const sentenceForTitleCase = 'this is a title case example';
// const stringForCharacterFrequency = 'javascript';
// const stringForCompression = 'aaabbbbccc';
// const anagramString1 = 'listen';
// const anagramString2 = 'silent';

// const longWord  = (str)=> {
//   let current = 0
//   let longestword  =''
//   for(let i = 0; i<str.length; i++){
//     if(str[i].length > current ){
//      current = str[i].length
//      longestword = str[i]
// }
//   }
//   console.log(longestword)
// }
// longWord(sentenceForLongestWord)

// const titlecase = ( str ) => {
//   const string = str.split(' ')

//   for(let i = 0; i<string.length; i++){
//     string[i] = string[i].at(0).toUpperCase() + string[i].slice(1)
//   }
//   return string.join(' ')

// }
// console.log(titlecase(sentenceForTitleCase))


//3.
// dont know

//4.
// const compressString = (str) => {
//   const obj = []
//   for(let i of str){
//     if(!obj[i]){
//       obj[i] = 1
//     }
//     else{
//       obj[i]++
//     }
//   }
//   return obj
// }

// console.log(compressString(stringForCompression))

// //5.
// const anagramOf = (str1, str2) => {
//   const ana1 = str1.split('')
//   const ana2 = str2.split('')
//   console.log(ana1)
//   console.log(ana2)
//   for(let i= 0; i<ana1.length; i++ ){
//     if(ana1[i].includes(ana2)){
//       console.log(true)
//     }
//   }
// }

// anagramOf(anagramString1,anagramString2)
///////////////////////////////////////////////

// const renderCountry = data => {
//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data[0].image}" />
//     <div class="country__region">
//       <h3 class="country__name">Title :${data[0].title}</h3>
//       <h4 class="country__region">ranking: ${data[1].ranking}</h4>
//       <p class="country__row"><span></span>genres: ${data[1].genres}</p>
//       <p class="country__row"><span></span>episodes: ${data[0].episodes}</p>
//       <p class="country__row"><span></span>status: ${data[1].status}</p>
//     </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const userRender = data => {
//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data.image}" />
//     <div class="country__region">
//       <h3 class="country__name">Name: ${data.firstName} ${data.lastName}</h3>
//       <h4 class="country__region">dob: ${data.birthDate}</h4>
//       <p class="country__row"><span></span>gender: ${data.gender}</p>
//       <p class="country__row"><span></span>Email : ${data.email.toLowerCase()}</p>
//       <p class="country__row"><span></span>pasition: ${data.company.title} in ${data.company.department}</p>
//     </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const randomId = Math.trunc(Math.random() * 20)
// console.log(randomId)

// const usersFunc = async (id)=>{
// try{
//   const res = await fetch(`https://dummyjson.com/users/${id}`)
//   const data = await res.json()
  
//   console.log(data)
//   userRender(data)
// }catch(err){
//   console.error(err);
// }

// }

// usersFunc(randomId)

//////////////////////////////////////////////////
//


// const Car = function (make,speed){
//   this.make = make 
//   this.speed = speed
// }

// Car.prototype.speedIn = function(sp){
//   this.speed += sp
//   console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// Car.prototype.speedDe = function(sp){
//   this.speed -= sp
//   console.log(`${this.make} is going at ${this.speed} km/h`)

// }


// const bmw = new Car('Bmw',10)
// bmw.speedIn(300)
