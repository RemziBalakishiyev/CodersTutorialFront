// let city1 = "Sumqayit";
// let city2 = "Baku";


// console.log(city1)

// let cities = ["Sumqayit","Ankara","Moskva","Berlin"];

// console.log(cities[1])




// //Added
// const actors = ["Leanordo Di Caprio","Bruce Willis"]

// const pushingActor = actors.push("Brad Pitt");
// const unshiftingActor = actors.unshift("Cillian Murphy");

// //Removed
// actors.pop();
// actors.shift();

// //Search

// const indexOfValue = actors.indexOf("Arif");

// const inclededValue = actors.includes("Arif");

// console.log(actors)
// console.log(indexOfValue)
// console.log(inclededValue)


// // Practice// Ilahe

// const students = ["Arif","Zahid","Leman","Vaqif"];

// const inputStudent = prompt("Give Studen Full Name")// Ilahe = inpStd = "Ilahe"


//     students.push(inputStudent)
//     console.log(students)


//     const programmingTutorials = [
//         "C# - Backend",
//         "Java - Backend",
//         ["Html","Css","Javascript"],
//         true,
//         2023
//     ]
    
//     console.log(programmingTutorials[4])   

//     console.log("We learn front end via Coders day - 1")
//     console.log("We learn front end via Coders day - 2")
//     console.log("We learn front end via Coders day - 3")

    // const value = 10;
    // //v   =  10 + 1
    // value = value + 1; // 11
    // //v   =  11 +   12 ; v = 23
    // value = value + 12;

    // const num1=12, num2=13, num3 = 14;
    //     // 12   +    13  -  14 = 11 
    // num1 = num1 + num2 - num3;
    //         //11 + 14
    // num2 = num1 + num3

    // console.log(num2)
    for(let repDay = 1; repDay <= 10; repDay++){
        console.log(`We learn front end via Coders day - ${repDay}`)
    }
 

    const telebeler = ["Arif","Zahid","Leman","Vaqif"];

    // console.log(students.length)
   

//                                       < 4
    for(let telebeninSirasi = 0; telebeninSirasi < telebeler.length; telebeninSirasi++){
       console.log(`Front Students ${telebeler[telebeninSirasi]}`)
    }


    //
    // let sum = 0;
    
    // for(let number = 1; number <= 100; number++)
    // {
    //     //s = 0 + 1;  s -> 1  
    //     // s= 1 + 2 . s-> 3
    //     // s =  3 + 3 s-> 6
    // }
    
    // sum = sum+number

    let sum = 0;

    for( let number = 10; number <= 40; number++ ){
        
        if(number % 2 == 0){
            sum = sum + number
            console.log(number)
        }
    }
    console.log(sum)