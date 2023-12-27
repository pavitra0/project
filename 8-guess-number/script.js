const message = document.querySelector(".message");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreContainer = document.querySelector(".score");
// console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

//   console.log(guess);

  if (!guess) {
    message.textContent = "⛔ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    message.textContent = "👍 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "📈Too High!" : "📉Too Low!" ;
      score--;
      scoreContainer.textContent = score;
    } else {
      message.textContent = "👎You Lose the Game!";
      scoreContainer.textContent = 0;
    }
  }
  //  else if (guess < secretNumber) {
  //   if (score > 1) {
  //     message.textContent = "📉Too Low!";
  //     score--;
  //     scoreContainer.textContent = score;
  //   } else {
  //     message.textContent = "👎You Lose the Game!";
  //     scoreContainer.textContent = 0;
  //     document.querySelector("h1").textContent = "Game Over!";
  //     document.querySelector("body").style.backgroundColor = "red";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", () => {
    score = 20
  scoreContainer.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  message.textContent = "Start Guessing...";
  document.querySelector("h1").textContent = "Guess My Number!";
});
// console.log(secretNumber);
