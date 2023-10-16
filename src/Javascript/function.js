function logger() {
  console.log("Hello World");
}

logger();

function loggerWithParam(message) {
  console.log(message);
}

loggerWithParam("Coders Tutorial");
loggerWithParam("30 day challange day  - 1");
loggerWithParam(13);

// function sum(numberOne, numberTwo) {
//   console.log(numberOne + numberTwo);
//   return numberOne + numberTwo;
// }

// const sumOfNumber = sum(13, 12); // --> 13

// if (sumOfNumber > 20) {
//   console.log("Okey");
// }

// let age = 17;
// let age_2 = 22;

// let hasDriverLicense1 = age > 18;
// let hasDriverLicense2 = age_2 > 18;

// console.log(getHasDriverLicense(13));
// console.log(getHasDriverLicense(19));
// console.log(getHasDriverLicense(20));

// const hasDriverLicense = getHasDriverLicense();
// console.log(hasDriverLicense);

// function getHasDriverLicense(age) {
//   return age > 18;
// }

// function canGetLicense(driverLicense) {
//   if (driverLicense) {
//     console.log("You get license");
//   } else {
//     console.log("You dont get license");
//   }
// }
// //    true

// // const age = +prompt();
// // const hasDriverLicense = getHasDriverLicense(age);

// // canGetLicense(hasDriverLicense);

// let driverAges = [13, 19, 20, 23, 12, 10];

// for (let age = 0; age < driverAges.length; age++) {
//   const hasDriverLicense = getHasDriverLicense(driverAges[age]);

//   canGetLicense(hasDriverLicense);
// }

// function getHasDriverLicense(age) {
//   return age > 18;
// }

// function canGetLicense(driverLicense) {
//   if (driverLicense) {
//     console.log("You get license");
//   } else {
//     console.log("You dont get license");
//   }
// }

// function calcAge(birthOfYear) {
//   return 2023 - birthOfYear; // 2023 -  2000 = 23
// }
//             // 2000
// let age = calcAge(2000); //-> 23
//               //true          //  23
// let hasDriverLicense = getHasDriverLicense(age);

// canGetLicense(hasDriverLicense);
// Function Decleration
console.log(cal50Percent(20));

function cal50Percent(number) {
  return number * 0.5;
}
function logger() {
  console.log("Hello World");
}

logger();

function loggerWithParam(message) {
  console.log(message);
}

loggerWithParam("Coders Tutorial");
loggerWithParam("30 day challange day  - 1");
loggerWithParam(13);
// Function Expression
const calc20Percent = function (number) {
  return number * 0.2;
};
console.log(calc20Percent(40));

const calc30Percent = (number) => number * 0.3;

console.log(calc30Percent());

const test = () => {
  return "Arif";
};

loggerWithParam(test());
