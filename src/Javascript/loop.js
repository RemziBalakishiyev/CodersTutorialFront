//#TASK 1

// let sum = 0;
// for (number = 10; number <= 40; number++) {
//   if (number % 2 == 0) {
//     // sum = sum + number;
//     sum += number;
//   }
// }

// console.log(sum);
// let mult = 1;
// let sumTwo = 0;
// for (let number = 10; number <= 13; number++) {
//   if (number != 0 && (number % 3 == 0 || number % 5 == 0)) {
//     console.log(number);
//     mult *= number; //
//   }

//   if (number % 2 != 0 || number % 5 != 0) {
//     sumTwo += number;
//   }
// }

// console.log(mult);
// console.log(sumTwo);

// for (let index = 0; index <= 5; index++) {
//   console.log(`---------------First index: ${index} `);

//   for (let secondaryIndex = 0; secondaryIndex <= 5; secondaryIndex++) {
//     console.log(`Secondary Index : ${secondaryIndex}`);
//   }
// }

// const programmingCourses = ["C#", "Java", ["Html", "Css", "Js", "React"]];
// console.log(programmingCourses);

// for (
//   let courseIndex = 0;
//   courseIndex < programmingCourses.length;
//   courseIndex++
// ) {
//   if (typeof programmingCourses[courseIndex] != "string") {
//     /// Array icerisinde Array var
//     console.log(programmingCourses[courseIndex]);
//     for (
//       let seconIndex = 0;
//       seconIndex < programmingCourses[courseIndex].length;
//       seconIndex++
//     ) {
//       console.log(
//         `Second Array ${programmingCourses[courseIndex][seconIndex]}`
//       );
//     }
//   }
// }

// for (let number = 2; number <= 9; number++) {
//   for (let number_2 = 1; number_2 <= 9; number_2++) {
//     console.log(`${number} x ${number_2} = ${number * number_2}`);
//   }
//   console.log("========================");
// }

// for (let index = 0; index < 5; index++) {
//   if (index == 2) {
//     continue;
//   }
//   console.log(index);
// }

const numberOne = [1, 350, 90, -100, 12000, -437]; //6
let max = numberOne[0]; // max = 1

for (let numIndex = 0; numIndex < numberOne.length; numIndex++) {
  //   -437 > 12000
  if (numberOne[numIndex] > max) {
    max = numberOne[numIndex]; //max = 350; max = 12000
  }
}
console.log(max);

const numbers_1 = [1, 350, 9990, 10, 123, -437]; //6
const numbers_2 = [1, 13, 0, -100, 44, -50]; //6

// numbers_2[3] = 12;

//const numbers_1 = [1, 350, -100, 10, 123, -437]; //6
//const numbers_2 = [1, 350, 0, 9990, 123, -437]; //6
