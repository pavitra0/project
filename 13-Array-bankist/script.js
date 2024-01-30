"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2022-11-18T21:31:17.178Z",
    "2022-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-04-10T14:43:26.374Z",
    "2023-06-25T18:49:59.371Z",
    "2023-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Pavitra Rathod",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2022-11-01T13:15:33.035Z",
    "2022-11-30T09:48:16.867Z",
    "2022-12-25T06:04:23.907Z",
    "2023-01-25T14:18:46.235Z",
    "2023-02-05T16:33:06.386Z",
    "2023-04-10T14:43:26.374Z",
    "2023-06-25T18:49:59.371Z",
    "2023-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2022-11-18T21:31:17.178Z",
    "2022-12-23T07:42:02.383Z",
    "2023-01-28T09:15:04.904Z",
    "2023-04-01T10:17:24.185Z",
    "2023-05-08T14:11:59.604Z",
    "2023-05-27T17:01:17.194Z",
    "2023-07-11T23:36:17.929Z",
    "2023-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const accounts = [account1, account2, account3, account4];

// const accounts = [account1, account2]

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = (acc, sort = true) => {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => b - a)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    const displaydate = `${day}/${month}/${year}`;

    const html = `
        <div class="movements">
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}</div>
          <div class="movements__date">${displaydate}</div>
          <div class="movements__value">${mov.toFixed(2)} ₹</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const updateUI = (acc) => {
  displayMovements(acc);

  calcDisplayBalance(acc);

  calcDisplaySummery(acc);

  if (timer) clearInterval(timer);
  timer = displayTimer();
};

const calcDisplayBalance = (acc) => {
  const balance = acc.movements.reduce((acc, mov) => {
    return acc + mov;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance.toFixed(2)} INR`;
};

const calcDisplaySummery = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}₹`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}₹`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}`;
};

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

//Fake login

const displayTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  };
  let time = 120;
  tick();
  let timer = setInterval(tick, 1000);

  return timer;
};

//Event handling
let currentUser, timer;

// currentUser = account1;
// updateUI(currentUser);
// containerApp.style.opacity = 100;

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentUser);

  if (currentUser?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome Back, ${
      currentUser.owner.split(" ")[0]
    }`;

    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = displayTimer();

    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${day}/${month}/${year} ${hour}:${min}`;

    labelWelcome.style.color = "";
    // labelWelcome.textContent = ``;

    inputLoginPin.value = inputLoginUsername.value = "";
    updateUI(currentUser);
  }
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentUser.balance >= amount &&
    receiverAcc?.username !== currentUser.username
  ) {
    //doing transfer
    currentUser.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    receiverAcc.movementsDates.push(new Date().toISOString());
    currentUser.movementsDates.push(new Date().toISOString());

    //Timer
    clearInterval(timer);
    timer = displayTimer();

    updateUI(currentUser);
  }
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentUser.username &&
    Number(inputClosePin.value) === currentUser.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentUser.username
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Math.floor(Number(inputLoanAmount.value));

  setTimeout(() => {
    if (amount > 0 && currentUser.movements.some((mov) => mov >= amount / 10)) {
      currentUser.movements.push(amount);

      currentUser.movementsDates.push(new Date().toISOString());

      //Timer
      clearInterval(timer);
      timer = displayTimer();

      updateUI(currentUser);
    } else {
      labelWelcome.style.color = "red";
      labelWelcome.textContent = `Your not Eligible for Loan!!`;
    }
  }, 2500);

  inputLoanAmount.value = "";
});

let sorted = false;

btnSort.addEventListener("click", (e) => {
  e.preventDefault();

  displayMovements(currentUser, !sorted);
  sorted = !sorted;
});

// console.log(accounts)

////////////////////////////////
//challenge 1
// const checkDogs = function (dogJulia, dogKate) {
// //   console.log(dogJulia.splice(1, 3));
//   const corectedData = dogJulia.splice(1, 2).concat(dogKate)
// //   console.log([...corectedData])
//     corectedData.forEach((val, i)=>{
//         let adult = val >= 3 ? `Dog number ${i+1} is an Adult, is ${val} age`: `Dog Number ${i + 1} is still a Puppy🐶`
//         console.log(adult)
//     })
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
/////////////////////////////////
// //challenge 2
// const calcAverageHumanAge = (ages) => {
//   const dog = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log("All ages of dogs", dog);
//   const newDog = dog.filter((age) => {
//     return age >= 18;
//   });
//   console.log("filter dogs ", newDog);
//   const avg = newDog.reduce((acc, cur) => {
//     return Math.trunc(acc + cur / newDog.length);
//   },0);
//   console.log("Average", avg);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log('Second data set')
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
/////////////////////////////////////
//challenge 3
// const calcAverageHumanAge = (ages) => {
//   const dog = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(dog);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// // ///////////////////
//map method
// const eurToUsd = 1.1;
// const newMovements = movements.map(mov => mov * eurToUsd)
// console.log(newMovements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//filter method
// const deposit = movements.filter(mov => mov >0)
// console.log(deposit)
// const withdrawal = movements.filter(mov => mov <0)
// console.log(withdrawal)
// //reduce method
// const totalBalance = movements.reduce((acc, cur)=>{
//   return acc + cur
// },0)
// console.log(totalBalance)

// const max = movements.reduce((acc, mov) => {
//   return acc > mov ? acc : mov;
// });
// console.log(max);

//array from
// const randomDice = Array.from({length:100}, (val,i)=> val = Math.trunc(Math.random() * 6 + 1))
// console.log(randomDice)

//array practice
// const flat = accounts.movements.flat()
// console.log(flat)
// const allAccountsSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0)

// console.log(allAccountsSum)

// const allDeposits1000 = accounts.flatMap(mov => mov.movements).filter(mov => mov >= 1000).reduce((acc, cur) => cur >= 1000 ? acc + 1 : acc, 0)
// console.log(allDeposits1000)

// const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur)=>{
//       sums[cur > 0 ? 'deposit':'withdrawal'] +=cur
//       return sums;
// },{deposit:0, withdrawal:0})
// console.log(sums)

// const convertTitleCase = (title) => {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1)
//   const exception = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) =>
//       exception.includes(word)
//         ? word
//         : capitalize(word)).join(' ')
//     return capitalize(titleCase)
// };

// console.log(convertTitleCase('this is a nice title'))
// console.log(convertTitleCase('and this is a nice title but the title is too big'))
// console.log(convertTitleCase('is a nice title but the title is too big'))

/////////////////////////////////////////////

//challenge 4

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 🤓

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)

// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];
// console.log(dogs);
// //1.

// dogs.forEach((a) => {
//   a.recFood = Math.trunc(a.weight ** 0.75 * 28);
// });
// //3.
// const dogEatToMuch = dogs
//   .filter((dog) => dog.recFood > dog.curFood)
//   .flatMap((dog) => dog.owners);
// const dogEatToLittle = dogs
//   .filter((dog) => dog.recFood < dog.curFood)
//   .flatMap((dog) => dog.owners);
// // console.log(dogEatToMuch);

// // console.log(dogEatToLittle);
// console.log(`${dogEatToMuch.join(" and ")}' s are eating too much`);
// console.log(`${dogEatToLittle.join(" and ")}' s are eating too little`);

// // console.log(dogs)
// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.recFood > dogSarah.curFood ? "little" : "Much"
//   }`
// );
// //5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood));
// //6.

// console.log(
//   dogs.some(
//     (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
//   )
// );

// //7.
// const goodFood = dogs.filter(
//   (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );

// console.log(goodFood);

// //8.
// const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(dogsCopy);

//  const printingValue = (arr) =>{
//   let sum = " "
//   for(let i = 0; i < arr.length; i++){
//     // console.log()
//     sum = sum +` ...${arr[i]}℃ in ${i+1} days`
//   }

//   console.log(sum)
//  }
//  const arr = [12,5,-5,0,4]
//  printingValue(arr)

//random background color changer

// const randomNoColor = ()=>{
//   const hex = `0123456789ABCDEF`
//   let color = `#`
//   for(let i =0; i<6; i++){
//    color += hex[Math.trunc(Math.random() * 16)]
//   }
//   return color
// }

// // setInterval(()=>{
// //  console.log( randomNoColor())

// // },1000)
// let click;
// const fun1 = ()=>{
//   if(!click){
//     click =   setInterval(()=>{
//    document.querySelector('body').style.backgroundColor = randomNoColor()
//       },1000)
//   }
// }
// const fun2 = ()=>{
//   clearInterval(click)
//   click = null
//   document.querySelector('body').style.backgroundColor = ''
// }
// btnLogin.addEventListener('click', (e)=>{
//   e.preventDefault()
//   fun1()
//   // start = false
// })
// document.querySelector('.welcome').addEventListener('click',(e)=>{
//   e.preventDefault()

//   fun2()
// })
//////////////////////PRACTICE////////////////////////////

// const func = (str) =>{
//   let st = '';
//   for(let i = 0; i < str.length; i--){
//    return st += str[i]
//   }
//   return st
// }
// console.log(func('pavitra'))

// 'pavitra'

// const func = (str)=>{
//   const reversed = str.split('').reverse().join('')
//   return reversed
// }
// console.log(func('mukesh'))
// let str = 'pavitra'

// const func1 = (str)=>{
//   let reverse = ''
//   for(let i in str){
//     reverse = str[i] + reverse
//   }
//   return reverse
// }

// console.log(func1('pavitra'))

// const num = (n1, n2)=>{
//   if(n1 + n2 === 100 || n1 === 100 || n2 ===100 ){
//     return true
//   }
// else{
//   return false
// }
// }
// console.log(num(10,80))

// const exfile =(file)=> file.slice(file.lastIndexOf('.'))
// console.log(exfile('pavitra.exe'))

// const date = new Date()
// console.log(date.getDate(),date.getMonth() + 1 , date.getFullYear())

// const newData = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`
// console.log(newData('New! hi my nam is pavitra'))

// const NewStr = (str) => {

//  return str.length < 3 ? str : str.slice(0,3) + str.slice(-4)
// }
// console.log(NewStr('pavitra'))
// console.log(NewStr('pav'))

// const evenStr = (str) =>str.slice(0, str.length / 2)
// console.log(evenStr('pavitraa'))

// const concatstr = (str,str2) => `${str.slice(1,str.length)}${str2.slice(1,str2.length)} `
// console.log(concatstr('pavi',"tra"))

// const near = (n1,n2) => (100 - n1) < (100 - n2) ? n1 : n2
// console.log(near(3,100))
// console.log(near(3,68))
// console.log('pavitra'.charCodeAt(0))

// const contain = (str,char) => str.split('').filter(ch => ch === char).length >= 2 && str.split('').filter(ch => ch === char).length <= 4
// console.log(contain('aaaaaaaaaaa','a'))

// const evenlen = (arr) => arr.filter((arr)=> (arr % 2 === 0)).length
// const createArray = (num) => {
//   const returnArray = []
//   for(let i =1; i<=num; i += 1){
//     returnArray.push(i)
//   }
//   return returnArray
// }
// console.log(evenlen(createArray(9)))

// console.log(evenlen([8,6,4,2,9]))

// const isSorted = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i + 1] < arr[i]) return false;
//   }
//   return true
// };
//  console.log(isSorted([2,3,5,6,2]))
//  console.log(isSorted([1,2,3,4,5,6,9]))

// const largestEven = (arr) => Math.max(...arr.filter((arr)=> arr % 2 === 0))
//   console.log(largestEven([1,2,3,4,5,6,7,8,9]))

// const firstDigit = (str) =>  str.replace(/[0-9]/, "$")

// console.log(firstDigit('1pavitra pravin'))

// const year = 2020

// if(year % 4 === 0){
//   console.log(year)
// }
// else{
//   console.log(false)
// }
// let obj  = { name : "pooja"}
// obj.ha

// const determinSamProp = (obj1, obj2) => obj1.hasOwnProperty() ===  obj1.hasOwnProperty()
// console.log(determinSamProp({name: "pavi"}, {age:"prav"}))

//
// console.log('abc,def,ghi,jkl,mno,pqr,stu,vwx,yz'.length)
// const array = (str) => str.split('\n').map((acc) => acc.split(','))
// console.log(array(`abc,def,ghi,
// jkl,mno,pqr,
// stu,vwx,yza`))

// const hex = `0123456789ABCDEF`;
// let color = "#";
// for (let i = 0; i < 6; i++) {
//   color += hex[Math.trunc(Math.random() * 16)];
// }
// console.log(color);

// const trueOrFalse = (arr) => arr.map((el) => el > 0 )
// console.log(trueOrFalse([1,2,3,4,5,6]))

// const sortedD = (str) => str.split('').sort((a, b) => a>b ? 1 : -1).join("")
// console.log(sortedD('pavitra'))

// const vowels = (str) => {
//   const excep = ['a','e','i','o','u']
//   for(let i = 0 ; i < str.length; i++){
//     console.log([...str[i].includes(excep)])
//   }
// }
// console.log(vowels('usgadk'))

// const unique = (str)=>{
//   str.split('').filter((val,i,arr) =>arr.filter((item) => item === val ).length === 1)
// }

// console.log(unique('jhskjjdjjdjdj'))

//////////////////////////////////////////////////////////////////
//Destructuring
const mixedObject = {
  name: "John Doe",
  age: 30,
  skills: ["JavaScript", "HTML", "CSS"],
  address: {
    city: "Example City",
    country: "Example Country",
  },
};
// let a = 1
// let b = 10
// let [a, b] = [b, a]
// let a =1
// let b =2
// const [a,b] = []
// console.log(a, b)
// const {name,age,skills,address,city,country} = mixedObject
// console.log(address.city)

////////////Constructure function
// function User(name, age){
//   this.age = age
//   this.name = name
// }

// const user1 = new User('kalu', 69)
// const user = new User('pavitra', 89)
// console.log(user1.age)
