const guessNumber = 49;
let guessBtn = document.querySelector(".guess-btn");
let progressBar = document.querySelector("#progress");
let numberInput = document.querySelector(".number-input");

let checkNumber = function () {
  console.log(numberInput.value);
};

guessBtn.addEventListener("click", checkNumber);
