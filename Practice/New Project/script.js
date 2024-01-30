const setHours = document.querySelector('.hour');
const setMinutes = document.querySelector('.minute');
const setSeconds = document.querySelector('.second');


function getTime() {
    const date = new Date();
    const hours = (date.getHours() / 24).toFixed(1).toString().replace('.', '');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    setHours.textContent = hours;
    setMinutes.textContent = minutes;
    setSeconds.textContent = seconds;
}

const timer = setInterval(() => {
    getTime();
},1000)
