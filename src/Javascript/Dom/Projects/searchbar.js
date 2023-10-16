let programmingTechnologies = [
  "Html",
  "Css", //"Javascript".includes("c")
  "Javascript",
  "React",
  "Mongo db",
  "C#",
  "Sql server",
];

let inputOfSearch = document.getElementById("search");
let listGroupForList = document.querySelector(
  "#autocompleteContainer .list-group"
);

const searchProgrammingDataForAutoComplete = function () {
  let inputData = inputOfSearch.value;
  listGroupForList.innerHTML = " ";

  if (inputOfSearch.value == "") {
    listGroupForList.innerHTML = " ";
  } else {
    for (let index = 0; index < programmingTechnologies.length; index++) {
      if (
        programmingTechnologies[index]
          .toLowerCase()
          .includes(inputData.toLowerCase())
      ) {
        listGroupForList.innerHTML =
          listGroupForList.innerHTML +
          `<li class="list-group-item">${programmingTechnologies[index]}</li>`;
      }
    }
  }
};

inputOfSearch.addEventListener("keyup", searchProgrammingDataForAutoComplete);
