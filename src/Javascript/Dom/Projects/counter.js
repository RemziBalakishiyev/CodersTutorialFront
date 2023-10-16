let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let resetBtn = document.querySelector("#reset");
let counter = document.querySelector(".counting");

const increaseCounter = function () {
  let numberCounter = +counter.innerHTML; // nC = 1  cI=1 // Secon click  cI= 3  nC=3

  numberCounter = numberCounter + 1; // nC = 2 cI =1 , nC=4 cI=3
  counter.innerHTML = numberCounter; //nC =  cI=2, nc=4 cI =4

  if (counter.innerHTML > 10) {
    counter.innerHTML = 0;
  }
};

plus.addEventListener("click", increaseCounter);
