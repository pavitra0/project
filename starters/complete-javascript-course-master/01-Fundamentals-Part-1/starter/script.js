// const percentageOfWorld = (pop) => (pop / 7900) * 100
// console.log(percentageOfWorld(1441))

// const neigbour = ['bangladesh','pakistan','china','nepal']
// console.log(neigbour.length === 4)
// neigbour.unshift('utopia')
// neigbour.shift()
// if(neigbour.includes('Germany')) console.log(`Probably not a central Europian country :D`)
// console.log(neigbour)

function avg(arr){
    return arr.reduce((acc, cur, _ , arr) => acc+cur / arr.length ,0).toFixed(2)
}

// const dolphinsScore = avg([97,10012,101])
// const koalasScore = avg([109,950,123])
// console.log(dolphinsScore,koalasScore)

// if(dolphinsScore >= 100 && koalasScore >= 100){
//     console.log(`Both team dolphinsScore and koalasScore are exceeding the number 100`)
//     if(dolphinsScore === koalasScore){
//         console.log('the result is draw')
//     }
// }
// const ann = 'Team dolphins wins the score is'

// if(dolphinsScore > koalasScore) {
//     console.log(`${ann} ${dolphinsScore}..... `) 
// } 
// else if(dolphinsScore < koalasScore){

//     console.log(`${ann} ${koalasScore}..... `) 
// }

let sym = ''

const input = 8

const arr = []

for(let i = 1; i<=input; i++){
    arr.push('*'.repeat(i))
    
}
console.log(arr)
