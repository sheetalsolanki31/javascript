// Q01). Create and Access Array Elements
// Create an array called fruits with the values: "apple", "banana", "cherry", "mango".
// Access the second element of the array and log it to the console.
// Change the third element to "grape" and log the updated array.

// let fruits = ["apple","banana","cherry","mango"];
// console.log(fruits[1]);
// fruits[2] = "grape";
// console.log(fruits);/



// ---------------------------------------------------------------------------------------------------------------------
// Q02. Loop Through an Array
// Create an array called numbers with the values: [10, 20, 30, 40, 50].
// Use a for loop to iterate over the array and print each number to the console.
  
// let numbers = [10, 20, 30, 40, 50];
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]); 
// }





// -----------------------------------------------------------------------------------------------------------------------
// Q03. Find the Largest Number in an Array
// Write a function findLargestNumber that takes an array of numbers as an argument and returns the largest number in the array.
// function findLargestNumber(arr){
//  let largestNumber = arr[0];
//  for(i=0;i < arr.length; i++){
//     if(arr[i] > largestNumber){
//         largestNumber = arr[i];
//      }
//  }
//  return largestNumber;
// }


// let numbers =  [45, 22, 98, 12, 34];
// console.log(findLargestNumber(numbers));


// -----------------------------------------------------------------------------------------------------------------------
//  Q04. Add/Remove Elements Using Array Methods
// Create an array called colors with the values: "red", "blue", "green".
// Add "yellow" to the end of the array using push().
// Remove the first element using shift().
// Log the final array to the console. 

//  let colors = ["red", "blue", "green"];
//  colors.push("yellow");
//  console.log(colors);
//  colors.shift();
//  console.log(colors);





// ----------------------------------------------------------------------------------------------------------------------------
// Q05. Combine Two Arrays
// Create two arrays: evenNumbers = [2, 4, 6] and oddNumbers = [1, 3, 5].
// Use the concat() method to combine both arrays into one called numbers, and log it to the console.
// let evenNumbers = [2, 4, 6];
// let  oddNumbers = [1, 3, 5];
// let numbers = evenNumbers.concat(oddNumbers);
// console.log(numbers);





// --------------------------------------------------------------------------------------------------------
// Q06. Check if a Value Exists in an Array
// Write a function checkPresence that takes two arguments: an array and a value. The function should return true if the value exists in the array, and false otherwise.
// function checkPresence(arr,value){
//    return arr.includes(value);
// }

// let fruits = ["apple", "banana", "cherry"];
// console.log(checkPresence(fruits, "banana"));  
// console.log(checkPresence(fruits, "grape"));   






// -------------------------------------------------------------------------------------------------------------
// Q07). Reverse an Array
// Create an array letters = ['a', 'b', 'c', 'd'].
// Use the reverse() method to reverse the array and log the result.
// let letters = ['a', 'b', 'c', 'd'];
// console.log(letters.reverse());




// ------------------------------------------------------------------------------------------------------------------
// Q08. Sum of All Elements in an Array
// Write a function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// function sumArray(arr){
//     let sum = 0;
//     for(i=0;i<arr.length;i++){
//      sum += arr[i];
//     }
//     return sum;
// }
// let numbers = [ 1,4,6,7,9,3,5,2];
// console.log(sumArray(numbers));



// -----------------------------------------------------------------------------------------------------------------------
// Q09. Sort an Array of Strings
// Create an array of strings called cities = ["Paris", "London", "New York", "Tokyo", "Delhi"].
// Use the sort() method to sort the cities in alphabetical order and log the result.
// let cities = ["Paris", "London", "New York", "Tokyo", "Delhi"];
// console.log(cities.sort());




// ------------------------------------------------------------------------------------------------------------------
// Q10. Remove Duplicates from an Array
// Write a function removeDuplicates that takes an array of numbers and returns a new array with duplicate values removed.
// function removeDuplicates(arr){
//     let uniqueArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;

// }
// let numbers = [ 1,4,6,7,9,1,1,3,5,7,3,5,2];
// console.log(removeDuplicates(numbers));



// -------------------------------------------------------------------------------------------------------------------
