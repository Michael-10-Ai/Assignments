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



function calculateDogAge(){
    puppy_age = 3
puppy_age = puppy_age * 7
console.log(puppy_age)
return 'Your doggie is 21 years old in dog years'
}

function calculateDogAge(){
    puppy_age = 5
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 35 years old in dog years'
}

function calculateDogAge(){
    puppy_age = 7
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 49 years old in dog years'
}

function calculateDogAge(){
    puppy_age = 10
    puppy_age = puppy_age * 7
    console.log(puppy_age)
    return 'Your doggie is 70 years old in dog years'
}

function calculateDogAge(){
    puppy_age = 14
    human_age = puppy_age / 7
    console.log(human_age)
    return 'You are 2 years old in human years '
}
console.log(calculateDogAge())


function calCircumference(radius){
let circumference = 2 * 3.14 * radius**2
console.log(circumference + 'cm')
return 'The circumference is 307.72cm'
}
console.log(calCircumference(7))

function calcArea(radius){
let area = 3.14 * radius**2
console.log(area + 'cm')
return 'The area is 314cm*2'
}
console.log(calcArea(10))
