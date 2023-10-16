let textOne = "          I am coders student                ";
let textTwo = "I am learning front end";
let programmingLanguage = "Html,Css,Javascript,React";
// Char At-den istifade ederek bir funksiya Yazin her boşluqdan sonra başlayan hrf böyük herfle yazılsın
// for (let index = 0; index < textOne.length; index++) {
//   if (!isNaN(textOne.charAt(index)) && textOne.charAt(index) != " ") {
//     console.log("Bu ifadede eded mövcuddur");
//   }
// }
//toUpperCase
console.log(textOne.toUpperCase());
//toLowerCase
console.log(textTwo.toLowerCase()); //Ctrl + shift + space

// CharAt
console.log(textOne.charAt(5));

//Concat
console.log(textOne.concat(" ", textTwo, " by Ramzi Balakishiyev"));

//endsWith
console.log(textOne.endsWith("student"));
//startWith
console.log(textTwo.startsWith("I am"));

//includes
console.log(textTwo.includes("f")); //True veya False

//indexOf
console.log(textOne.indexOf("s"));

//lastIndexOf
console.log(textOne.lastIndexOf("t"));

//repeat
console.log(`${textOne} `.repeat(3));
//replace
// textTwo = textTwo.replace("front end", "back end");
console.log(textTwo);

//slice
console.log(textOne.slice(textOne.indexOf("c"), textOne.indexOf("s") + 1));
//search

console.log(textTwo.search("front"));

//split

console.log(textTwo.split(" "));
console.log(programmingLanguage.split(","));

for (const character of textTwo.split(" ")) {
  console.log(character.charAt(0));
}

//substr

console.log(textOne.substr(5, 14));

//trim

console.log(textOne.trim());
