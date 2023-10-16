const inputs = document.querySelectorAll("input");
const bookNameInput = document.querySelector(".name-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const priceInput = document.querySelector(".price-input");
const titleInput = document.querySelector(".title-input");
const orderButton = document.querySelector(".order-button");
const bodyOfBookTable = document.querySelector("#bookTable tbody");
const formInput = document.querySelector(".ordering-inputs");
const validationMessageSummary = document.querySelector(
  ".book-name-validation-summary"
);
const checkBookNameNotEmpty = function () {
  if (bookNameInput.value == "") {
    const errorMessageSpan = `<span style='color:red'>Kitab adı boş ola bilməz</span>`;

    validationMessageSummary.insertAdjacentHTML("beforeend", errorMessageSpan);
    return false;
  }
};

const addBookDataToTable = function () {
  if (!checkBookNameNotEmpty()) {
    return;
  }
  const tableTdHtml = `       
                <tr>
                    <td>${bookNameInput.value}</td>
                    <td>${authorInput.value}</td>
                    <td>${pageInput.value}</td>
                    <td>${priceInput.value}</td>
                    <td>${titleInput.value}</td>
                </tr>`;

  bodyOfBookTable.insertAdjacentHTML("beforeend", tableTdHtml);
};
orderButton.addEventListener("click", addBookDataToTable);
