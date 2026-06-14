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

function temperature(celsius){
    let degree_fahrenheit = celsius * 9/5 + 32;
    console.log(degree_fahrenheit + 'f')
}
temperature(30)

function temperatur(fahrenheit){
     let degree_celsius = (fahrenheit - 32) * 5/9;
    console.log(degree_celsius + 'c')
}
temperatur(50)



// Create a function named checkEntry.
// ​It should accept two parameters: age (a number) and isVIP (a boolean: true or false).
// ​Rule 1: If isVIP is true, return "Access Granted: Welcome VIP!" immediately.
// ​Rule 2: If they are not a VIP, they must be 21 or older. If they are under 21, return "Access Denied: Too young!".
// ​Rule 3: If they pass both checks, return "Access Granted: Enjoy the night!".

function checkEntry(age, isVIP){
    if (isVIP === true){
        console.log("Access Granted: Welcome VIP!")
        }

    if (age < 21){
        console.log("Access Denied: Too young!")
        }


    if (isVIP === true && age === 21){
        console.log("Access Granted: Enjoy the night!")
    }
}

console.log(checkEntry(21, true))





