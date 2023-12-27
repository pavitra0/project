// console.log('hi')
const body = document.querySelector('body')
body.style.backgroundColor ='#232323'
body.style.color ='#fff'

// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];

// Exercises

// 1) What is the average income of all the people in the array?
// let cur = 0;
// for(let i = 0; i<people.length; i++){
//     cur += +(people[i].salary)/people.length
//     console.log(people[i].salary)

// }
// console.log(cur)

// 2) Who are the people that are currently older than 30?
// console.log(people.length)

// const birthYear = people.filter(obj => 2023 - +(obj.DOB.split('/')[2]) > 30)
// console.log(birthYear.length)
// console.log(clacAge(birthYear))

// 3) Get a list of the people's full name (firstName and lastName).
// const nameArr = []

// const fullName = people.map(obj => nameArr.push(`${obj.firstName} ${obj.lastName}`))

// console.log(nameArr)
// 4) Get a list of people in the array ordered from youngest to oldest.

// const sort = people.sort((a, b) => +(b.DOB.split('/')[2]) - +(a.DOB.split('/')[2]))
// console.log(sort)


// 5) How many people are there in each department?
// console.log(people)
// console.log('Sales',people.filter(el => el.department === 'Sales').length)
// console.log('Development',people.filter(el => el.department === 'Development').length)
// console.log('Marketing',people.filter(el => el.department === 'Marketing').length)
// console.log('Office Management',people.filter(el => el.department === 'Office Management').length)

//////////////////////////////////////////////////////////////////////////
// const orders = [
//     { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//         { productId: '123', price: 55 },
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//         { productId: '234', price: 30 },
//     ]},
//     { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//         { productId: '567', price: 30 },
//         { productId: '678', price: 80 },
//     ]},
//     { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '789', price: 12 },
//         { productId: '890', price: 90 },
//     ]},
//         { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//         { productId: '901', price: 43 },
//         { productId: '123', price: 55 },
//     ]},
// ];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
// const idttf = []
// idttf.push(orders.filter(el => el.orderId === '234'))
// console.log(idttf)

// 2) Create a new property on each order with the total price of items ordered.

// const items = orders.map((el) => {
//     return el.items.map(el => el.price).reduce((acc, cur) => acc+cur ,0)
// })
// orders.map((arr,i) => arr.totalPrice = items[i])
// console.log(orders);

// const price = items.map((obj, i) => obj.price)
// console.log(items)

// 3) Have all the orders been delivered?

// console.log(orders.every(el => el.delivered))


// 4) Has the customer with ID '123' made any orders?

// function orderFind(id){
//     if(id === undefined || ''){
//         console.log(`No orders by this id ${(id)}`)
//     }
//     else{
//         console.log(...orders.filter(el => el.orderId === id ))
//     }
// }
// orderFind('123')
// 5) Have any products with an id of 123 been sold?

// // console.log(orders.filter(obj => obj.orderId === '123')[0].items.length >= 1 && 'Ordered')
// const para = document.querySelector('p')
// para.style.color = '#ccc'
// para.innerHTML = para.innerText.split(' ').map(word => word.length >=8 ? `<span style='background-color:skyblue; color:white; border-radius:2px; padding:2.5px 2.5px'>${word}</span>` : word ).join(' ')

// //2.

// const anchor = document.createElement('a')
// anchor.textContent =' html'
// para.appendChild(anchor)
// anchor.href = 'https://www.youtube.com/watch?v=EHF7xBUAmrQ&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=10'
// anchor.target = '_blank'
// // console.log(anchor)

// //3
// // para.innerHTML = para.innerHTML.split(/.[^\.|<]/).join('<p></p>') + '</p>'

// //4.

// const h4 =document.createElement('h1')
// h4.style.backgroundColor ='red'
// h4.innerText = para.textContent.split(' ').length
// document.body.prepend(h4)

// //5.

// Array.from(document.querySelectorAll('p'))
// .forEach(p => {
//     p.innerHTML = p.innerHTML
//     .replace(/\?/g, '🤔')
//     .replace(/\!/g, '😲')
// })


// console.log(para.textContent.replace(/./g,'🤔').replace(/!/g, '😲'))

///////////////////////////////////////////////////////////////////////
/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
function tagId(id, label){
    const iden = document.querySelector(`#${id}`)
    const html = `<h6>${label}: </h6>`
    iden.insertAdjacentHTML('beforebegin', html)
}
tagId('username','username')
tagId('password', 'password')
tagId('confirmPassword', 'confirmPassword')
/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
const allInputs = document.querySelectorAll('.form-control')
allInputs.forEach(el =>{

    console.log(el.value)
    // el.addEventListener('change', function(e){
    //     e.preventDefault()
    //     // if(e.value === '')console.log(''yes)
    // })
})


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
