console.log('Hellow World');

//var, const and let

var name ='michael';
var name ='akan'; //variable can be re-decleared
name = 'jaabir'; //var allow re-assignment
console.log(name);

let num = 45;
// let num = 90; //let does not support re-declearing
// num = 90;  //let supports re-assignment
console.log(num);

let color;
console.log(color)

const temperature = '50 deg-celsius';
//const temperature = 50; //const does not allow re-declearing
//temperature =89; //const does not support re-assignment
console.log(temperature)

//hoisting - assigning values to a variable before declaring it
//only var allows hoisting

shape = 'circle';
var shape;
console.log(shape);

let today = 'monday';
console.log(today); //let and const do not support hoisting

//scope
 {
    var myname = 'carter efe';

 }
 myname = 'portable';
 console.log(myname)

 {
    let mynum = 90;

 }
 let mynum = 91;
 console.log(mynum)

 {
    const year = 2023;

 }
 const year = 2024;
console.log(year)


function sum(){
  let a = 5;
  let b = 7;
  return a + b;
}
 console .log(sum());
console.log(5);
  console.log(7);

   
let favcolor = 'my favorite color is';

if (true){
    favcolor = favcolor + 'orange';
    console.log(favcolor) 
}

const food = 'rice';

if (true){
    foodie = food + 'beans';
    console.log(foodie)
}
  
/* data types 
1. primitive data types
2. complex data types

*/

// primitive data types

// string : is a text quoted with a single or double quatation marks
let mylanguage ='JavaScript';
let status = 'single';

let verdict = "He's a smart little boy";
let statement ="He is an 'engineer' by profession";
let other = 'He\'s a fantastic footballer';  //escape parameter
let myage = 12
console.log(verdict, statement, other);

// type of 
console.log(typeof verdict, typeof statement, typeof other);

//string cantenation - adding two strings together

console.log(verdict + "" + "and" + "" + statement);

//number
let age = 12
console.log(typeof age);

let largenum = 123e13;
let smallnum = 123e-13;
console.log(largenum,smallnum);

//boolean - it's a truthy or falsy value
let isaround = true;
let iamhungry = false;
console.log(age == myage);
console.log(age === myage);
console.log(typeof isaround);

// if (5==6){
//  console.log('they are not equal')
//} else{
   //  console.log ('they are not equal')
   //}

   //undefined - a variable that is not assigned any value
   let myfav;
   console.log(myfav, typeof myfav);
   let value = undefined;

   //undefined - the absence of a value
   //null - means nonexisting
   let notexisting = null
   console.log(typeof notexisting);
   // console.log(document.querySelector('.nulls'));

   let emptystring ="";
   console.log(typeof emptystring)

   console.log(emptystring === notexisting)

   //BigInt

   let largevalue = BigInt(233444)
   console.log(largevalue)
   console.log(typeof largevalue)
   let big = 4567n;
   console.log(big);

   console.log(BigInt(age) * big)

   //complex data type
   //1. object - Array, set, map, JSON, Date, Regex, int-16, int-34, float-16, float-32, float-64

   //object
   const myObj = {
      name: 'jaabir',
      profession: 'none',
      status:'single',
      age: 16
   }
 console.log(typeof myObj)

 let myArray = ['red', 'yellow', 'white', 'purple'];
 console.log(myArray);
 console.log(myArray instanceof Array);
 console.log(Array.isArray(myArray));

 //date
 let todays = new Date();
console.log(todays);
console.log(todays instanceof Date);

//Naming

//let na 
//console.log(na);

//undefined: declaring a variable without assingning a value to it

//Naming convention
//Rules of naming
/*
1. The name must not start with a number
2. Don't start with a special character & symbols (+, -, *, #, e.t.c)
except (_, $)
3. You can use camelcase, pascal case
4. you can't have a dash between two joined words
5. You can't use js reserved words (true, false, let, const, var, prompt, function, array, map, set, async, await, promise)
*/

let _color = 'red';
console.log(_color);
let $garden = 'wide';
console.log($garden);
let iscorrect = 'true';
console.log(iscorrect);
let iscorrectandprecise = true;
console.log(iscorrectandprecise);
let my_name = 'jaabir';
console.log(my_name);
let async = 'yes';
console.log(async);

//map - collection of key-values pair where  the key can be of any data type
let mymap = new Map ([
   ['apples', 10],
   ['pinapples', 12],
   ['oranges', 45],
])

let user = {
   name: 'john',
   weight: 56
}

console.log(typeof mymap);
console.log(mymap instanceof Map);
mymap.set(user, 123);
console.log(mymap);
console.log(mymap.get(user));

//Set --
const unique = new Set([

   'brown', 'yellow', 'yellow', 'green', 'blue', 'red'
]);
console.log(unique);

//String conversion
//Number

let numbers = 67;
//let newNumber = string(numbers)
let newNumber = numbers.toString();
console.log(typeof newNumber);

//boolean
let bull = true;
console.log(bull.toString());

//object
let myUser = {
   course: 'web development',
   duration: '6 months',
   backend_stack: 'PHP',
}
console.log(myUser.toString());

let newarray = ['volkenswagen', 'passet', 'lexus', 'mercedes',];
console.log(newarray.toString());

//date
let t = new Date();
console.log(t.toString());

//number
let str = '990'
console.log(typeof Number(str));

let ispresent = false;
console.log(Number(ispresent));

let nomenclature = 'CHM';
console.log(Number(nomenclature));
console.log(typeof nomenclature);
//NaN - Not A Number

let emptystr = '';
console.log(Number(emptystr));

let to = new Date();
console.log(Number(to));

//Automatic Type Conversion
console.log('5' + 10);
console.log(2 + 3 + '89');
console.log(5 + null);
console.log(5 + 'null');
console.log('5' - 2);
console.log('5' * 3);
console.log('15' / '3');
console.log(14/0);
console.log('letter' * 8);

//unary operator
let valu = +'10';
console.log(typeof valu);

//Operators 
//Addition
let newAge = 34;
let oldAge = 14;
let totalAge = newAge + oldAge;
console.log(totalAge);

//let years = new date ();
//let currentYear = years.getFullYear();
//let input = parseInt(prompt('Enter your year of birth'))
//alert(currentYear-input
//console.log(currentYear-input)

//multiplication
console.log(newAge*oldAge);
console.log(newAge/oldAge);
//modulus - returns the remainder of a division

console.log(newAge%oldAge);
//exponenciation
console.log(5**2);
console.log(Math.pow(5,3));

//increment
let money = 89;
let mymoney = 78;
//money++
console.log(++money);
console.log(mymoney++);
console.log(mymoney);

//decrement
let dollar = 90;
dollar--;
console.log(dollar);

//assignmment operators
const assign = 90;
//addition assignment operator
// let add = add + 1;
let add = 9;
console.log(add +=67);

//substraction assignment operator
console.log(add -=12);

//multiplication assignment operator
console.log(add *=10);

//division assignment operator
console.log(add /=10);

//modulus assignment operator
console.log(add %=5);

//calculate the total price of an item using the information below
let total = 100;
let discount = 0.2;
let tax = 0.05;
let finalprice = 80 + tax;
console.log(finalprice);

//operator precedence
let b = 23 * 10 - 8 / (1 + 2) + 5;
230 - 8 / 3 + 5
230 - 2.67 + 5
227.33 + 5 
232.33
console.log(b);

//comparison operator
let y = 34;
let z = 12;
console.log(y == z);
console.log(y === z);
console.log(y != z);
console.log(y !==z);
console.log(y > z);
console.log(y >= z);
if(y >= z){
   console.log('it\'s going to rain')
}
if(y >= z) {
   console.log('michael is confused')
}
console.log(y <= z);

// == - comparing the values
// == - compares to tell if there the same z (also known as loose equality)
// === - comparing the data type
// === - tells the data type to know available (also known as strict equality)

//string-number comparison

console.log('5' >= '12');
console.log(9 > '100');
console.log('text' > 'Text' ); 
console.log('A' < 'a');
console.log('pythoN' < 'python');
console.log(10 == '10');
console.log(10 === '10');
// console.log(0 = false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

//logical operator
//logical AND
let case1 = true;
let case2 = false;
console.log(case1 && case1);
console.log(case1 && case2);
console.log(case2 && case2);

//logical OR
console.log(case1 || case1); //true
console.log(case1 || case2); //true
console.log(case2 || case1); //true
console.log(case2 || case2); //false

//logical NOT
console.log(!case1); //false
console.log(case2);

//short-circuiting
//logical OR assignment operator -- the first opearnd will be returned if it's true
// let p = true;
// let p = 0;
// let p = null;
// let p = '0';
let p = 'false';
let r = p ||= 10;
console.log(r);
let userinput = "";
let username = userinput || 'Guest';
console.log(username);

//logical AND assignment operator -- the second operand will be returned if the first operand is true

// let userinfo = 67;
let userinfo = 0;
let useroutput = userinfo && 'userprofileloaded';
console.log(useroutput);

//nullish coalescing --- it return the second operand if the first operand is null or undefined

let balance = 0;
let qualified = balance ?? 10;
console.log(qualified);

console.log(5 > 'john'); //false because can't compare a number to a string
console.log(5 < 'john'); 

console.log(11 + 'eleven');
console.log(11 + true);

//conditional statement

//if statement
let hisage = 18;
if (hisage < 18){
console.log('you are not eligible to drive')
}

if (hisage <= 18){
console.log('you are eligible to drive')
}

//if...else statement

let day = new Date().getMonth();
console.log(day);
if (day < 5){
   console.log('We are not yet in the second part of the month');
} else{
   console.log('The year is still pretty young');
}

//nested if
let country = 'Nigeria';
let city = 'Lagos';

if (country === 'Nigeria'){
   if(city === 'Lagos'){
   console.log('you are in West Africa')
   }else{
      console.log('you are not getting it right')
   }
}else{
console.log('it has to be Nigeria')
}

if(country === 'Nigeria' && city === 'Lagos') {
   console.log('you are in West Africa')
}else{
   console.log('it has to be Nigeria and Lagos')
}

//Write a script that checks a variable temperature.
//if temperature is greater than 30, log it's too hot
//otherwise, log it's a pleasant day.

let temperatu = 50;
if (temperatu > 30) console.log('it\'s too hot')
   else console.log('it\'s a pleasant day');

/*
login system 
create two variables: username and password. if username is exactly 'admin'
and password is exactly '12345', log access  granted otherwise, log invalid
credentials 
*/

let temperatur = 20;
if (temperatur > 30 ){
   console.log('it\'s too hot')
}else{
   console.log('it\'s a pleasant day');
}

let usernam = 'admin';
let password = 12345;
if (usernam === 'admin' && password === 12345){
console.log('access granted')
}else{
   console.log('invalid credentials')
}

//if...else if...else

   let grade = 100;
   if(grade >= 90) {
      console.log('A+')
   }else if (grade > 80){
      console.log('A-')
   }else if (grade > 70){
      console.log('B+')
   }else if (grade > 60){
      console.log('B-')
   }else {
      console.log('Re-write the exam')
   }

   //A store gives discount based on the amount spent.
/*
spent $100 or more:20% discount
spent between $50 and $99: 10% discount
spent less than $50: No discount. Write a program that takes a variable
totalSpent and logs the final price after the discount is applied
 */


let totalspent = 10;
let finalprices;

if (totalspent === 100){
   finalprices = `$${totalspent - (totalspent * 0.2)}`;
} else if (totalspent >= 50 && totalspent <= 99) {
   finalprices = `$${totalspent - (totalspent * 0.1)}`;

}else {
   finalprices = 'No Discount';
}
console.log(finalprices);

   //write a program that checks two variables, the first variable has 
   // degree(boolean) and
   //years experience(number)
   //1. check if hasdegree is true
   //2. if it is, check if years is two or more
   //2a. if both are true, log short listed for interview
   //2b. if they have a degree but less than two years experience, log entry
   //level position offered
   //3. if they don't have a degree, log degree required for this role

   //write a program for a varaible x
   //1.if it is divisible by three log fizz
   //2. if x is divisible by five log buzz
   //3.  if x is divisible by three and five log fizz buzz
   //otherwise log the number its self

   let hasdeg = 'True';
   let yrexp = 5;

   // if (hasdeg === 50){
   //    console.log('True')
   // }

   // if (yrexp >= 2){
   //    console.log('True')
   // }
   
   if (hasdeg && yrexp >= 5){
      console.log('Short listed for interview')
   }else if (hasdeg && yrexp < 2){
      console.log('Entry level position offered')
   }else {
      console.log('Degree required for this role')
   }

   let x = 8;
   
   if(x % 3 === 0){
      console.log('Fizz')
   }else if (x % 5 === 0){
      console.log('Buzz')
   }else if (x % 3 === 0 && x % 5 === 0){
      console.log('Fizz Buzz')
   }else {
      console.log('The number it self')
   } 
   

