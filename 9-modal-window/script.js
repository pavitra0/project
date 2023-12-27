const closeBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const allModal = document.querySelectorAll('.show-modal')
// console.log(allModal)
const openFun = ()=>{
   modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
}
const closeFun = ()=>{
   modal.classList.add('hidden')
   overlay.classList.add('hidden')
}

allModal.forEach((elm) => {
     elm.addEventListener('click', openFun)
})

closeBtn.addEventListener('click', closeFun)
overlay.addEventListener('click', closeFun )

document.addEventListener('keydown', (e)=>{
 if(e.key === "Escape")
 if(!modal.classList.contains('hidden')){
    closeFun()
 }
 
})