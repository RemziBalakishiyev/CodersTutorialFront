const validationMessage = [
  {
    message: "Şifrə ən az 5 simvoldan ibarət olmalıdır",
  },
  {
    message: "Şifrə daxilində ən az bir rəqəm olmalıdır",
  },
  {
    message: "Şifrə daxilində ən az bir böyük hərf olmalıdır",
  },
];
//
let btnOfCheck = document.querySelector("#checkBtn");
let inputOfCheck = document.querySelector("#checkInp");
let containerForValidation = document.querySelector("#validationContainer");

const checkLength = () => inputOfCheck.value.length > 5;

const checkNumber = function () {
  let text = inputOfCheck.value;
  for (let index = 0; index < text.length; index++) {
    if (!isNaN(text.charAt(index)) && text != "") {
      return true;
    }
  }
  return false;
};

const mainlyCheck = function () {
  containerForValidation.innerHTML = "";
  if (!checkLength()) {
    containerForValidation.insertAdjacentHTML(
      "beforeend",
      `<div class="text-danger mt-3">${validationMessage[0].message}</div>`
    );
  }

  if (!checkNumber()) {
    containerForValidation.insertAdjacentHTML(
      "beforeend",
      `<div class="text-danger mt-3">${validationMessage[1].message}</div>`
    );
  }
};

btnOfCheck.addEventListener("click", mainlyCheck);

let text = "codeRs";

let checkUpperCharacter = function (text) {
  for (let index = 0; index < text.length; index++) {
    let upperWord = text.charAt(index).toUpperCase(); // R
            // R          ==  R
    if (text.charAt(index) == upperWord) {
      return true;
    }
  }
};

checkUpperCharacter(text);
