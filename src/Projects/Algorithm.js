// const country = prompt("Olke adini daxil edin");
// const city = prompt("Şəhər adini daxil edin");
// const street = prompt("Küçə adini daxil edin");

// console.log(`${country} , ${city} - ${street}`);

// const number = +prompt();

// const text = number > 0 ? "Musbet eded" : "Menfi eded";

// console.log(text);
const array = [1, 2, 3, 4, 5];

const reverseArray = [];

for (let index = array.length - 1; index >= 0; index--) {
  console.log(array[index]);
  reverseArray.push(array[index]);
}

console.log(reverseArray);
