let isResult = true;


console.log(typeof(5 == 5))
console.log(5 == 5)
console.log(5 > 5)


// if(10 > 5)
// {
// //.....
//   alert(" 5 is greater than!")
// }else{
//   alert("5 isnot greater than 5!")
// }


// const firstNumber = +prompt("Give first number")
// const secondNumber = +prompt("Give second number")

// if(firstNumber > secondNumber){
//     console.log(`${firstNumber} > ${secondNumber} `)
// }

// if(firstNumber < secondNumber){
//     console.log(`${firstNumber} < ${secondNumber} `)
// }

// if(firstNumber == secondNumber){
//     console.log(`${firstNumber} == ${secondNumber} `)
// }


// if(firstNumber > secondNumber){
//     console.log(`${firstNumber} > ${secondNumber} `)
// }
// else if(firstNumber < secondNumber){
//     console.log(`${firstNumber} < ${secondNumber} `)
// }
// else{
//     console.log(`${firstNumber} == ${secondNumber} `)
// }


const correctUserName = "coders";
const correctPassword = "coders123";

const userName = prompt("Type User Name");
const password = prompt("Type Password");

if(userName == correctUserName && password != correctPassword){
    alert("Password is invalid");
}
else if(userName != correctUserName && password == correctPassword){
    alert("User Name is invalid");
}
else if( userName != correctUserName && password!=correctPassword){
    alert(" Not found ");
}
else{
    alert("Welcome to coders!");
}



