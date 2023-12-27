//Higher order functions 

// const string = (str)=>{
//     return str.replaceAll(" ", '-').toLowerCase()
// }

// const eachFirst = (str)=>{
//     const [first, ...others] = str.split('') 
//      output = [first.toUpperCase(),...others ].join(' ')
    
//     return output
// }

// const printer = (f1,f2) =>{
//     return`
//     Transformed by${string(f1)}
//     Transformed by${eachFirst(f2)}
//     `
// }

// console.log(printer('pavitra is a good boy','pavitra is a good boy'))


////////////////////////
//function returning function

// const greet = (greeting)=>{
//     return (name)=>{
//         console.log(`${greeting} ${name}`)
//     }
// }

// greet('hello')('kratis')


// /////////////////////
// ////the call and apply methods

// const anime1 = {
//     name : 'Naruto',
//     author: 'Masashi Kishimoto',
//     history:[],
//     emoji:'🍜',
//     print(character, place){
//         console.log(
//             `${this.name} is the Best Anime ${this.emoji}, By ${this.author},The protagonist is ${character} of ${place}`
//         )
//         this.history.push({place : place, character  })
//     },
// }
// console.log('CALL METHOD')
// anime1.print('naruto', 'Leaf villege')

// // console.log(anime1.history)
// //for one piece anime
// const anime2 = {
//     name : 'One Piece',
//     author:'Eichiro Oda',
//     emoji:'🏴‍☠️',
//     history:[]
// }

// const func = anime1.print
// func.call(anime2,'Luffy','Foosha Villege')
// // console.log(anime2)//
// //Apply method
// //for aot
// const anime3 = {
//     name : 'Attack on Titan',
//     author:'Hajime Isayama',
//     emoji:'🧱',
//     history:[]
// }
// //we have first to create array of data 
// const animeArr = ["Eren Yeager", "ShiganShina District"]
// console.log("APPLY METHOD")
// func.call(anime3, animeArr)

// ////////////////////////////////////////////////
// //The Bind method
// //the bind method create a function with the instance of  another function
// // const printing = (name)=>{
// //     console.log(`this is your name ${this.name}`)
// // }
// console.log('Bind Method')
// const newFunc = func.bind(anime2)
// newFunc('Luffy', 'Foosha villege')
// newFunc('Luffy', 'Fother ')
// ///////////////////////////////////////////
// //Challenge create a function that return a function

// const addtax = (rate) =>{
//     return function addvat(value){
//         return  value + value * rate
//         }
// }

// const addVat = addtax(.23)
// console.log(addVat(100))
// console.log(addVat(23))

// ///////////////////////////////////////////////////
// //challenge
// console.log('CHALLENGE')
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         let inputVer = +(prompt(`${this.question}\n${this.options.join('\n')}(Write option number)`))
            
//         //register input
//             typeof inputVer === 'number'
//              && inputVer < this.answers.length
//              && this.answers[inputVer]++;
//             //  console.log(this.answers)
//              poll.displayResults(this.inputVer)
//              poll.displayResults('string')
//     },
//     //display function
//     displayResults(type){
//         typeof type === 'string' ? console.log(`Poll results are ${this.answers[0]} ${this.answers[1]} ${this.answers[2]} ${this.answers[3]}`) : console.log(this.answers)
//     }
// };
// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
// /////////////////////////////////
// //bonus challenge
// console.log('BONUS CHALLENGE')
// poll.displayResults.call({answers : [3,7,9,8]})
// poll.displayResults.call({answers : [3,7,9,8]},'string')


/////////////////////////////////////////////
//Closures

// const firstFunc = (a)=>{
//     const square = a*a
//     return function(){
//         console.log(square)
//     }
// }
// const caller = firstFunc(1)
// caller()
// console.dir(caller);
/////////////////////////////////////////////////
//Challenge 2

// (function (){
//     var h1 = document.querySelector('h1');
//     h1.style.color = 'red'
//     const body = document.querySelector('body')
    
// body.addEventListener('click', ()=>{
//     h1.style.color = 'blue'
// })
// })()

// const btn = document.querySelector('.buy')
// btn.addEventListener('click', ()=>{
//     const input = prompt("Enter a string that you wnat to Reverse").split('').reverse();
//     const formated = input.toString().replaceAll(',',"")
//     console.log(formated)
// })
