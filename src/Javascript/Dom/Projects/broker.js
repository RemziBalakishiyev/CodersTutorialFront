// DOM selectors
const tbody = document.querySelector("table tbody");
const incomeValue = document.querySelector(".income-value");
const outcomeValue = document.querySelector(".outcome-value");
const gainValue = document.querySelector(".gain-value");
const userNameInp = document.querySelector("#userName");
const passwordInp = document.querySelector("#password");
const loginContainer = document.querySelector(".login");
const loginBtn = document.querySelector(".login-btn");
const appContainer = document.querySelector(".section-1");
const sale = document.querySelector("#Sale");
const purchase = document.querySelector("#purchase");
const add = document.querySelector("#addBtn");
const listHome = document.querySelector(".home-list");
const load = document.querySelector(".cutom_button");
const sort = document.querySelector(".fa-sort");

let homeAdded = [];

let currentBroker = {};
// DATASs
const broker1 = {
  fullName: "Fariz Huseynov",
  userName: "fariz",
  dateOfBirth: 1900,

  homes: [
    {
      purchasePrice: 150000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 1,
    },
    {
      purchasePrice: 280000,
      salePrice: 240000,
      type: 2,
    },
    {
      purchasePrice: 170000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker2 = {
  fullName: "Rehim Memmedov",
  userName: "rehim",
  dateOfBirth: 2000,

  homes: [
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 240000,
      salePrice: 250000,
      type: 2,
    },
    {
      purchasePrice: 140000,
      salePrice: 240000,
      type: 1,
    },
    {
      purchasePrice: 130000,
      salePrice: 150000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 250000,
      type: 1,
    },
  ],
};
const broker3 = {
  fullName: "Vaqif Mehdiyev",
  userName: "vaqif",
  dateOfBirth: 2000,

  homes: [
    {
      purchasePrice: 140000,
      salePrice: 50000,
      type: 1,
    },
    {
      purchasePrice: 200000,
      salePrice: 350000,
      type: 1,
    },
    {
      purchasePrice: 10000,
      salePrice: 230000,
      type: 1,
    },
    {
      purchasePrice: 110000,
      salePrice: 170000,
      type: 1,
    },
    {
      purchasePrice: 270000,
      salePrice: 200000,
      type: 1,
    },
  ],
};
const brokers = [broker1, broker2, broker3];

const createPaswordGenerator = function (brokers) {
  for (let index = 0; index < brokers.length; index++) {
    let element = brokers[index];
    element.password = `${element.userName}${element.dateOfBirth}`;
  }
};

createPaswordGenerator(brokers);

const showHomeDetails = function (homeDetails) {
  const arrHomeDetails = Array.from(homeDetails);
  tbody.innerHTML = "";
  arrHomeDetails.forEach((home) => {
    const homeType = home.type == 1 ? "Bina evi🏢" : "Həyət evi🏡";

    const result = home.salePrice - home.purchasePrice > 0 ? "Ziyan" : "Xeyir";
    const resultClass =
      home.salePrice - home.purchasePrice > 0 ? "danger" : "success";
    let tableBodyHtml = `
                <tr>
                    <td>${home.purchasePrice}$</td>
                    <td>${home.salePrice}$</td>
                    <td>${homeType}</td>
                    <td>
                        <span class="badge p-2 rounded-pill text-bg-${resultClass}">${result}</span>
                    </td>
                </tr> 

    `;

    tbody.insertAdjacentHTML("beforeend", tableBodyHtml);
  });
};



const calcSummary = 
loginBtn.addEventListener("click", function (e) {
  currentBroker = brokers.find(
    (x) => x.userName == userNameInp.value && x.password == passwordInp.value
  );
  if (currentBroker) {
    loginContainer.style.opacity = 0;
    appContainer.style.opacity = 1;
    showHomeDetails(currentBroker.homes);
  } else {
    alert("Password or UserName incorrect");
  }
});

const clearInput = function () {
  purchase.value = "";
  sale.value = "";
};

add.addEventListener("click", function (e) {
  e.preventDefault();

  const homeItemHtml = `
        <li class="list-group-item">${purchase.value} - ${sale.value} $</li>
  `;

  listHome.insertAdjacentHTML("beforeend", homeItemHtml);
  const homeMaps = new Map();
  homeMaps.set("purchasePrice", +purchase.value);
  homeMaps.set("salePrice", +sale.value);
  homeMaps.set("type", 1);

  let homeObj = Object.fromEntries(homeMaps);
  homeAdded.push(homeObj);
  clearInput();
});

load.addEventListener("click", function (e) {
  e.preventDefault();
  if (homeAdded.length > 0) {
    broker1.homes = [...broker1.homes, ...homeAdded];
    showHomeDetails(broker1.homes);
    listHome.innerHTML = "";
    homeAdded = [];
  }
});
