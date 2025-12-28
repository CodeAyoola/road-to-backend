// 1. Values and Variables

let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1413;

// make sure your variable names are descriptive 

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

// better than 

let job1 = 'Programmer'
let job2 = 'Teacher'


// 2. Data Types

// There are 7 primitive data types
// 1. Number -- let age = 23
// 2. String -- let firstName = 'Jonas'
// 3. Boolean -- ler fullAge = true;
// 4. Undefined -- let children;
// 5. Null
// 6. Symbol
// 7. BigInt



true;
console.log(true)
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// re assigning a variable without the let 
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);


// 3. What to use to declare variables -- let, const, var

let age = 30;
age = 31;

// const is used to describe variable that will not change

const birthYear = 1991;
birthYear = 1990; // error

const firstJob; // error

// the var keyword should be completely avoided 

var myAge = 24;
myAge = 25;

