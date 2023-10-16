// const btnOfSignUp = document.getElementById("signBtn");
// const inputOfSignUp = document.getElementById("signInput");
// const cardTitle1 = document.querySelectorAll(".card-title")[0];
// const showAlert = function () {
//   console.log(inputOfSignUp.value);
// };

// btnOfSignUp.addEventListener("click", showAlert);

// inputOfSignUp.addEventListener("keydown", function () {
//   cardTitle1.innerHTML = "Register Form";
// });

const btnOfChangeColor = document.getElementById("changeColorBtn");
const inputOfColor = document.querySelector("#inputColor");
const colorCodeTitle = document.querySelectorAll(".card-title")[0];
const checkOfTextColorChange = document.getElementById("textColorChange");
const enteredColor = document.getElementById("enteredColor");

const body = document.body;

const arifIsteyirDeyeTeyinElediyimFunksiya = function (color) {
  body.style.backgroundColor = color;
  colorCodeTitle.innerHTML = color;
  colorCodeTitle.style.backgroundColor = color;
};

const setColor = function () {
  let colorValue = inputOfColor.value;

  if (colorValue.length == 6 || colorValue.length == 3) {
    arifIsteyirDeyeTeyinElediyimFunksiya(`#${colorValue}`);
    return;
  }
  alert("Color code is incorrect");
};

btnOfChangeColor.addEventListener("click", setColor);

const setColorCodeTitle = function () {
  const checked = checkOfTextColorChange.getAttribute("checked");

  if (checked != null) {
    colorCodeTitle.style.color = "#fff";
  } else {
    colorCodeTitle.style.color = "#000";
  }
};

checkOfTextColorChange.addEventListener("click", function () {
  if (checkOfTextColorChange.getAttribute("checked") != null) {
    checkOfTextColorChange.removeAttribute("checked");
  } else {
    checkOfTextColorChange.setAttribute("checked", "checked");
  }

  setColorCodeTitle();
});

const setColorFromEnteredColor = function () {
  console.log(enteredColor.value);
  arifIsteyirDeyeTeyinElediyimFunksiya(enteredColor.value);
};

enteredColor.addEventListener("change", setColorFromEnteredColor);
