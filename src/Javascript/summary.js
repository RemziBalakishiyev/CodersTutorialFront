const phone = {
  name: "Iphone 15",
  model: "Iphone",
  price: 4000,

  showNameAndModel: function () {
    console.log(`${this.model} --- ${this.name}`);
  },

  calcCredit: function (month, increase) {
    let priceWithPercentage = phone.price * (increase / 100);
    let monthlyPrice = priceWithPercentage / month;
    return monthlyPrice;
  },
};

// phone.showNameAndModel();
// console.log(Math.round(phone.calcCredit(10, 100)));

const book = {
  bookName: "Qraf Monte Kristo",
  bookPrice: 20,
  authour: {
    firstName: "Alexandr",
    lastName: "Duma",
    dateOfBirth: 1856,
  },
  countOfPage: 1020, //10
  calcPublishPrice: function (publishPrice) {
    return this.countOfPage * publishPrice;
  },

  convertToDollar: function () {
    this.USD = this.bookPrice * 1.7;
  },
};

// const aliNino = book.calcPublishPrice(10);
// const libraf = book.calcPublishPrice(10);

// console.log();

// //book.convertToDollar();

// const telebeler = ["Arif", "Zahid", "Leman", "Vaqif"];

// for (let index = 0; index < telebeler.length; index++) {
//   console.log(telebeler[index]);
// }

// for (const x of telebeler) {
//   console.log(x);
// }

for (const key in book) {
  console.log(book[`${key}`]);
}
