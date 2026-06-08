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
     if (ita % 3 === 0 && ita % 5 === 0){
            console.log('FizzBuzz')
        }
    else if (ita % 3 === 0){
        console.log('Fizz')
        }
    else if (ita % 5 === 0){
        console.log('Buzz')
        }
else {
    console.log(ita)
}
