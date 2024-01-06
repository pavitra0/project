//selectors 
const newQBtn = document.querySelector('.quotegen')
const shareBtn = document.querySelector('.share')
const display = document.querySelector('h1')


//Events listeners

newQBtn.addEventListener('click', fetchQuote)
// shareBtn.addEventListener('click', ()=> console.log('share'))



async function fetchQuote(){
   const url = fetch("https://type.fit/api/quotes")
    try{
      const res = await url
        const data = await res.json()
       const first = data[randonId()]
       Object.values(first)[1].split(',')[0]
       const  [quote, author] = Object.values(first) 
    
      display.textContent = `${quote} 
       ~${author.replace(', type.fit','')}`
      console.log(display.textContent)
}catch(err){
    console.log('whoops', err)
}

}
fetchQuote()
function randonId(){
   return Math.trunc(Math.random() * 16)
}
