// Q01).Declare a variable myAge and assign your age to it. Then, log it to the console.
// let myAge = 22;
// console.log(myAge);


// --------------------------------------------------------------------------------------------------------------


// Q02).Create three variables: firstName, lastName, and fullName. Assign values to them and concatenate them to create a full name string.
// let firstName = "Sheetal";
// let lastName = "Solanki";
// let fullName = firstName + " "  + lastName;
// console.log(fullName);



// ---------------------------------------------------------------------------------------------------------------
// Q03).Use let, const, and var to declare a variable and try re-declaring it in the same scope. What happens?
// let x = 5;//we cannot redeclare a variable using let in same scope ,we can re assign it only.
// let x = 4;
// var y = 6;//we can redeclare and reassign a variable using var in same scope.
// var y = 7;
// const z = 4;//we cannot reassign or redeclare a variable using const in same scope.
// const z = 6;






// -----------------------------------------------------------------------------------------------------------------
// Q04).Create a variable isStudent and assign it a boolean value. Log its type using typeof.
// let isStudent = true;
// console.log(typeof(isStudent));







// ----------------------------------------------------------------------------------------------------------------
// Q05).Write a function that takes a string and returns its length.
// function findStringLength(str){
//     return str.length;
// }
// const inputString = "Hello, World!";
// const length = findStringLength(inputString);
// console.log("The length of the string is:", length);





// ------------------------------------------------------------------------------------------------------------------
// Q06).Create an array called favoriteFoods with at least five items. Log the second item in the array.
// let favoriteFoods = ["dal chawal","bhindi" , "paneer"];
// console.log(favoriteFoods[1]);






// --------------------------------------------------------------------------------------------------------------------
// Q07).Create an object person with properties name, age, and city. Log the age property.
// const person = {
//     name :"Sheetal",
//     age : 22,
//     city : "Indore"
// }
// console.log(person.age);





// ----------------------------------------------------------------------------------------------------------------
// Q08).Write a program that checks if a number (stored in a variable) is even or odd. Log a message to the console indicating the result.
// let x = 5;
// if(x%2==0){
//     console.log( x + " " + "is even");
// }else{
//     console.log( x + " "  +  "is odd");
// }






// -------------------------------------------------------------------------------------------------------------------
// Q09).Create a program that takes a grade (number) and logs whether it's an "A", "B", "C", "D", or "F".
// let grade;
// let number = 70;
// if(number >= 0 && number < 60){
//     grade = "F";
// }else if(number >= 60 && number < 70){
//     grade = "D";
// }else if(number >= 70  && number < 80){
//     grade = "C";
// }else if(number >= 80 && number < 90){
//     grade = "B";
// }else if(number >= 90 && number <= 100){
//     grade = "A";
// }
// console.log(grade);






// ---------------------------------------------------------------------------------------------------------------------
// Q10).Write a switch statement that takes a day number (1-7) and logs the corresponding day of the week.
// let number = 5;
// let day;
// switch(number){
//     case 1:
//         day = "monday";
//         break;
//         case 2:
//             day = "tuesday";
//             break;
//             case 3:
//                 day = "wednesday";
//                 break;
//                 case 4:
//                     day = "thursday";
//                     break;
//                     case 5:
//                         day = "friday";
//                         break;
//                         case 6:
//                             day = "saturday";
//                             break;
//                             case 7:
//                                 day = "sunday";  
//                                 break;
//                                 default:
//                                     day = "uknown case";

// }
// console.log(day);






// ------------------------------------------------------------------------------------------------------------------------
// Q11).Write a for loop that prints numbers from 1 to 20.
// for(let i=1; i<=20; i++){
//     console.log(i);
// }





// ----------------------------------------------------------------------------------------------------------------
// Q12).Create a while loop that continues to prompt the user for a number until they enter a number greater than 10.
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function askForNumber() {
//   rl.question("Enter a number: ", (input) => {
//     let number = parseInt(input);

//     if (number <= 10) {
//       console.log("Please enter a number greater than 10.");
//       askForNumber();  // Ask again if the number is less than or equal to 10
//     } else {
//       console.log("You entered:", number);
//       rl.close();  // Close the readline interface after a valid number is entered
//     }
//   });
// }

// askForNumber();







// ---------------------------------------------------------------------------------------------------------------------
// Q13).Write a do-while loop that prints "Hello, World!" at least three times.
// let str = "Hello, World!";
// let i = 0;
// do{
//     console.log(str);
//     i++;
// }while(i<3);





// --------------------------------------------------------------------------------------------------------------
// Q14).Use a loop to print the elements of the favoriteFoods array (created in Day 2) one by one.
// let favoriteFoods = ["dal chawal","bhindi" , "paneer"];
// for(let i = 0; i < favoriteFoods.length; i++){
// console.log(favoriteFoods[i]);
// }
















// -------------------------------------------------------------------------------------------------