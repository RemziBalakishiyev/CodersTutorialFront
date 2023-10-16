// let bruceWayne = document.getElementById("bruceWayne");
// bruceWayne.style.backgroundColor = "red";
// bruceWayne.style.color = "white";

// let getbruceWayneWithSelector = document.querySelector(
//   "#bruceWayne .card-body .card-link"
// );

// let getCardTextFromCard = document.querySelector("#bruceWayne .card-body p");

// let firstName = "Zahid";

// firstName = firstName + " Heyderli";

// getCardTextFromCard.innerHTML =
//   getCardTextFromCard.innerHTML +
//   `  <span class="badge bg-success">${firstName}</span>`;

// console.log(getbruceWayneWithSelector.textContent);
// getbruceWayneWithSelector.textContent = "Arif Holdinq";

// getbruceWayneWithSelector.style.textDecoration = "none";
// getbruceWayneWithSelector.style.color = "#fff";

// const number = +prompt("Eded daxil edin");
// if (number > 0) {
//   bruceWayne.style.backgroundColor = "red";
//   bruceWayne.style.color = "white";
// } else {
//   bruceWayne.style.backgroundColor = "green";
//   bruceWayne.style.color = "black";
// }

const cardTitles = document.getElementsByClassName("card-title");

cardTitles[0].textContent = "Coders";
cardTitles[0].style.color = "red";

cardTitles[2].textContent = "Coders";

for (let index = 0; index < cardTitles.length; index++) {
  cardTitles[index].textContent = "Coders";
  cardTitles[index].style.color = "red";
}

const cards = document.getElementsByClassName("card");

const cardLinks = cards[1].querySelectorAll(".card-body .card-link");

for (const link of cardLinks) {
  link.style.textDecoration = "none";
  link.style.color = "black";
}

cardLinks[0].innerHTML = "Actor";
cardLinks[1].innerHTML = "Famous";

let thirthCard = cards[2].querySelectorAll(".card-body .card-link");

thirthCard[0].setAttribute(
  "href",
  "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"
);

thirthCard[0].setAttribute("target", "_blank");


console.log(cardLinks);
