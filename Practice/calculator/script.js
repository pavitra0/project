const calcDisplay = document.querySelector("h2");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0
let operatorValue = ''
let awaitingNextvalue = false

function sendNumberValue(number) {
    //replace current display value if value is entered
    if(awaitingNextvalue){
        calcDisplay.textContent = number
        awaitingNextvalue = false
    }
    else{
        //if current display value is 0, replace it, if not add number
        const displayValue = calcDisplay.textContent;
        calcDisplay.textContent =
        displayValue === "0" ? number : displayValue + number;
    }

}
const calculate = {
  '/':(firstValue, secondValue) => firstValue / secondValue,

  '*':(firstValue, secondValue) => firstValue * secondValue,

  '+':(firstValue, secondValue) => firstValue + secondValue,

  '-':(firstValue, secondValue) => firstValue - secondValue,

  '=':(firstValue, secondValue) => secondValue,

}

function useOperator(operator){
    const currentValue = +(calcDisplay.textContent)
    //prevent multiple operator
    if(operatorValue && awaitingNextvalue){
      operatorValue = operator
      return
    } 
    //assign fisrtvalue if no value
    if(!firstValue){
        firstValue = currentValue
    }
    else{
      const calculation = calculate[operatorValue](firstValue, currentValue)
      calcDisplay.textContent = calculation
      firstValue = calculation
    }
    awaitingNextvalue = true

    operatorValue = operator

}

function addDecimal() {
//if operator pressed don't add decimal
if(awaitingNextvalue) return

  if (!calcDisplay.textContent.includes(".")) {
    calcDisplay.textContent = `${calcDisplay.textContent}.`;
  }
}

//Btns functionality

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("decimal")) {
    inputBtn.addEventListener("click", () => addDecimal());
  }
});

clearBtn.addEventListener('click', function(){
    firstValue = 0
    operatorValue = ''
    awaitingNextvalue = false
    calcDisplay.textContent = '0'
})