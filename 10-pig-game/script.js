// selecting dom elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, activePlayer, currentScore, playing;

//initiating values
const init = () => {
  playing = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  current0El.classList.add('player--active');
  current0El.classList.remove('player--active');
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling the dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    //generating random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //  console.log(dice)
    //displaying dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //updaing score
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //changing the player if dice is 1
    else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', () => {
  if (playing) {
    //adding currentscore to activeplayer
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //if score is 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});
// btnNew.addEventListener('click', init);
// let input = prompt("enter a string?")
// let str = ""

// let obj = {}
// for(let i of str){
//   console.log(i)
//   // console.log(obj[i])
//   if(!obj[i]){
//     obj[i] = 1
//     // console.log(obj[i])
//   }
//   else{
//     obj[i]++

//   } 
// }
// console.log(obj)


