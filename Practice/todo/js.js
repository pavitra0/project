//selectors 
const ol = document.querySelector('ol')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const btn = document.querySelector('.btn')
// console.log(input)

// function clicked(){
//     const html = `<li>${input.value}</li>`
//     ol.insertAdjacentHTML('afterend', html)
//     input.value = ''
// }
// btn.addEventListener('click',()=>{
//   clicked()
// })
// document.addEventListener('keydown',(e)=>{
//     if(e.key === 'Enter'){
//         clicked()
//     }
// })

function addTask() {
    const html = `<li>${input.value}</li>`;
    ol.insertAdjacentHTML('beforeend', html);
    input.value = '';
}

btn.addEventListener('click', () => {
    addTask();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


///////////////////////////////////////////////////////
//practice
//1.
// const arrSum = (arr)=>{
//     console.log(arr.reduce((acc, cur) => acc+cur,0))
// }
// arrSum([2, 7, 1, 8, 3])
//2.
// const arrMax = (arr)=>{
//   return arr.reduce((acc, cur,_,arr)=> acc>cur ? acc : cur ,arr[0])
// }
// console.log(arrMax([14, 23, 6, 32, 19]))

//3.
const arr = [7,5,2,4]

arr.unshift(arr.pop())
console.log(arr)