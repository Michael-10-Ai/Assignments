// 1. write a foreloop that counts backwards from 10 to 1 and then logs blast off at the end.

// 2. write a foreloop that calculates the sum of all numbers from 0 to 20.

// 3. write a foreloop that iterates from number 1 to 50.
// 3i. for multiples of 3, log fizz instead of the number.
// 3ii. for multiples of 5, log buzz. 
// 3iii. for numbers which are multiples of both 3 and 5, log fizzbuzz.


for (ind = 10; ind >= 1; ind--) {
    console.log(ind)



}
console.log('Blast off at the end')

let sum = 0
for (let ide = 0; ide <= 20; ide++) {
    sum += ide
}
console.log(sum)


for (ita = 1; ita <= 50; ita++)
    // console.log(ita)
    if (ita % 3 === 0 && ita % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (ita % 3 === 0) {
        console.log('Fizz')
    }
    else if (ita % 5 === 0) {
        console.log('Buzz')
    }
    else {
        console.log(ita)
    }



//write a function that converts temperature in degree fahrenheit to degree celsius and also from degree celsius to degree fahrenheit

//c = (f - 32) * 5/9
//f = c * 9/5 + 32

function temperature(celsius) {
    let degree_fahrenheit = celsius * 9 / 5 + 32;
    console.log(degree_fahrenheit + 'f')
}
temperature(30)

function temperatur(fahrenheit) {
    let degree_celsius = (fahrenheit - 32) * 5 / 9;
    console.log(degree_celsius + 'c')
}
temperatur(50)



// Create a function named checkEntry.
// ​It should accept two parameters: age (a number) and isVIP (a boolean: true or false).
// ​Rule 1: If isVIP is true, return "Access Granted: Welcome VIP!" immediately.
// ​Rule 2: If they are not a VIP, they must be 21 or older. If they are under 21, return "Access Denied: Too young!".
// ​Rule 3: If they pass both checks, return "Access Granted: Enjoy the night!".

function checkEntry(age, isVIP) {

    if (isVIP === true && age >= 21) {
        return "Access Granted: Enjoy the night!"
    } else if (isVIP === true) {
        return "Access Granted: Welcome VIP!"
    } else if (age < 21) {
        return "Access Denied: Too young!"
    }

}

console.log(checkEntry(22, true))


// function calculateDogAge() {
// let puppy_age = 3;
// puppy_age = 7 * 3
// console.log(puppy_age)
// if (puppy_age === 7*3){
//     console.log('your doggie is 21 years old in dog years')
// }

// let human_age;
// human_age = puppy_age / 7
// console.log(human_age)
// if (human_age === puppy_age / 7){ 
//     return 'You are 3 years old in human years'
// }
// }

// function calculateDogAge(){
//     puppy_age = 5
//     puppy_age = 7 * 5
//     console.log(puppy_age)
//     if (puppy_age === 7*5){
//         console.log('Your doggie is 35 years old in dog years')
//     }


// let human_age;
// human_age = puppy_age / 7
// console.log(human_age)
// if (human_age === puppy_age / 7){
//     return 'You are 5 years old in human years'
// }
// }

// function calculateDogAge(){
//     puppy_age = 7
//     puppy_age = 7 * 7
//     console.log(puppy_age)
//     if (puppy_age === 7*7){
//         console.log('Your doggie is 49 years old in dog years')
//     }

// let human_age;
// human_age = puppy_age / 7
// console.log(human_age)
// if (human_age === puppy_age / 7){
//     return 'You are 7 years old in human years'
// }
// }

// function calculateDogAge(){
//     puppy_age = 10
//     puppy_age = 7 * 10
//     console.log(puppy_age)
//     if (puppy_age === 7*10){
//         console.log('Your doggie is 70 years old in dog years')
//     }


// let human_age;
// human_age = puppy_age / 7
// console.log(human_age)
// if (human_age === puppy_age / 7){
//     return 'You are 10 years old in human years'
// }
// }
// console.log(calculateDogAge())

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.


// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".



function calculateDogAge() {
    puppy_age = 3
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 21 years old in dog years'
}

function calculateDogAge() {
    puppy_age = 5
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 35 years old in dog years'
}

function calculateDogAge() {
    puppy_age = 7
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 49 years old in dog years'
}

function calculateDogAge() {
    puppy_age = 10
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 70 years old in dog years'
}

function calculateDogAge() {
    puppy_age = 14
    human_age = puppy_age / 7
    console.log(human_age)
    return 'You are 2 years old in human years '
}
console.log(calculateDogAge())


function calCircumference(radius) {
    let circumference = 2 * 3.14 * radius ** 2
    console.log(circumference + 'cm')
    return 'The circumference is 307.72cm'
}
console.log(calCircumference(7))

function calcArea(radius) {
    let area = 3.14 * radius ** 2
    console.log(area + 'cm')
    return 'The area is 314cm*2'
}
console.log(calcArea(10))


// The assignment 

// 1. Write a JavaScript function to capitalize the first letter of a string.

// Test Data :

// console.log(capitalize('js string exercises'));
// "Js string exercises"

// Write a JavaScript function to capitalize the first letter of each word in a string.

// Test Data :

// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// Write a JavaScript function to convert a string into camel case.

// Test Data :

// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"


function capitalize(lala) {
    return lala.at(0).toUpperCase()
}
console.log(capitalize('js string exercises'))


function capitalize_Words(lale) {
    return lale.at(0, 4, 10).toUpperCase()
}
console.log(capitalize_Words('js string exercises'))


function camelize(lalo) {
    return lalo.toUpperCase()
}
console.log(camelize('JavaScript Exercises'))


function camelize(lalu) {
    return lalu.toUpperCase()
}
console.log(camelize('JavaScript exercises'))


function camelize(lalae) {
    return lalae.toUpperCase()
}
console.log(camelize('JavaScriptExercises'))



// .Exract Characters

// Write a JavaScript function to extract a specified number of characters from a string.

// Test Data :

// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(lolo) {
    let nolo = lolo.substring(4);
    return nolo
}
console.log(truncate_string("Robin Singh", 4));


//Write a JavaScript function to sort the items of an array.
// Sample array : var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Write a JavaScript program to find the sum of squares of a numerical vector

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).  

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1]
function sort() {
    return arr1.sort()
}
console.log(sort())

function square(vector, vect) {
    let numvec = vector ** 2 + vect ** 2
    return numvec
}
console.log(square(10, 20))

let arr2 = ['Rice', 'Beans', 'Yam', 'Potato', 'beans', 'Garri']
function arraay() {
    return arr2[1]
}
console.log(arraay(arr2))


// Question 1.
//  Sum of Arrays by Index

// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample array :

// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];

// Expected Output :

// [4, 5, 8, 10, 12, 13]

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
function sumindex() {
    let botharrs = array1[0, 1, 2, 3, 4] + array2[0, 1, 2, 3, 4, 5]
    return botharrs
}
console.log(sumindex())


// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// Test Data :

// console.log(first([7, 9, 0, -2]));

// console.log(first([],3));

// console.log(first([7, 9, 0, -2],3));

// console.log(first([7, 9, 0, -2],6));

// console.log(first([7, 9, 0, -2],-3));

// Expected Output :

// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(n) {
    return n.at(1)
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));


// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// Test Data :

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(n) {
    return n
}

console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
console.log(last([7, 9, 0, -2]));


// Imagine you have a list of user actions or bank transactions sorted chronologically (oldest to newest). You want to grab the most recent action of a specific type.

// const userLogs = [
//   { action: 'login', time: '09:00 AM' },
//   { action: 'update_profile', time: '10:15 AM' },
//   { action: 'login', time: '01:30 PM' }, { action: 'logout', time: '05:00 PM' }]

function banktransactions() {

}


// let arrayys = [1, 2, 2, 3, 3, 3, 4]

// let how_many = 0;
// function aray(no_1, no_2) {
//     let myArray_no = arrayys

//     for (let i = 0; i < myArray_no.length; i++) {
//         if (myArray_no[i] === no_2) {

//             how_many += 1
//         }


//     }
//     return `The ${no_2} is found ${how_many} times`

// }
// console.log(aray(arrayys))

// 1. Count how many times an element appears in an array
// let array = [1, 2, 2, 3, 3, 3, 4]

// 2.Multiply each element of an array by a number

// 3. create a function get_adults that filters an array of objects and returns only the guests who are 18 years or older
//  const guests = [
// {Name: 'Alice', Age: 16},
// {Name: 'Bob', Age: 22},
// {Name: 'Chalie', Age: 17},
// {Name: 'David', Age: 30}
// ]

let array = [1, 2, 2, 3, 3, 3, 4]

function arayy (no_1){
let dig = array.forEach(element => {
    let no_2 = 0
    if (array === no_2)

        no_2 += 1
        return `The ${no_1} is found ${no_2} times`
})
}
console.log(arayy())


let multiply_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
function mul_arr(){
multiply_array = multiply_array.map(multi => multi * 3)
return multiply_array
}
console.log(mul_arr())


const guests = [
    { Name: 'Alice', Age: 16 },
    { Name: 'Bob', Age: 22 },
    { Name: 'Chalie', Age: 17 },
    { Name: 'David', Age: 30 }
]

function get_adults() {

    let guestsss = guests.filter(guest => guest.Age >= 18)
    return guestsss
}
console.log(get_adults())


