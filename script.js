// // 1. Values and Variables

// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log('Jonas');
// console.log(23);

// let firstName = 'Jonas';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name convention
// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.1413;

// // make sure your variable names are descriptive

// let myFirstJob = 'Programmer'
// let myCurrentJob = 'Teacher'

// // better than

// let job1 = 'Programmer'
// let job2 = 'Teacher'


// // 2. Data Types

// // There are 7 primitive data types
// // 1. Number -- let age = 23
// // 2. String -- let firstName = 'Jonas'
// // 3. Boolean -- ler fullAge = true;
// // 4. Undefined -- let children;
// // 5. Null
// // 6. Symbol
// // 7. BigInt



// true;
// console.log(true)
// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// // re assigning a variable without the let
// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);


// // 3. What to use to declare variables -- let, const, var

// let age = 30;
// age = 31;

// // const is used to describe variable that will not change

// const birthYear = 1991;
// birthYear = 1990; // error

// const firstJob; // error

// // the var keyword should be completely avoided

// var myAge = 24;
// myAge = 25;


// // 4. Basic Operators

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas);
// console.log(ageSarah);

// console.log(ageJonas * 2, ageJonas / 10);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + ' ' + lastName);

// // 4. Assignment Operator

// let x = 10 + 5; // x = 15
// x += 10; // what this means - x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// // Comparison Operator

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;


// // 5. Operator Precedence

// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageJonas, averageAge);


// // First Coding Challenge

// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);



// markMass = 95;
// johnMass = 85;
// markHeight = 1.88;
// johnHeight = 1.76;

// console.log(markBMI, johnBMI, markHigherBMI);



// STRINGS AND TEMPLATE LITERALS

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';

// const jonasNew = `I'm ${firstName}, a ${year - birthYear}, years old ${job}!`

// console.log(jonas, jonasNew)


// TAKING DECISIONS IF ELSE STATEMENTS

// const age = 15;

// if (age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too young, wait another ${yearsLeft} years 😒`)
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)

// Second Coding Challenge

// let markMass = 78;
// let johnMass = 92;
// let markHeight = 1.69;
// let johnHeight = 1.95;

// const markBMI = Math.trunc(markMass / (markHeight ** 2));
// const johnBMI = Math.trunc(johnMass / (johnHeight ** 2));

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
// }

// markMass = 95;
// johnMass = 85;
// markHeight = 1.88;
// johnHeight = 1.76;

// console.log(markBMI, johnBMI, markHigherBMI);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
// }


// TYPE CONVERSION AND COERCION

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 28);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// type coercion

// console.log('I am ' + 23 + ' years old');
// console.log('23' - "10" - 3);


// TRUTHY AND FALSY VALUES

// Five Falsy Values
// 1. 0, " ", underdefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean({}));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));

// const money = 1;
// if (money) {
//     console.log(`Don't spend it all`)
// } else {
//     console.log('You should get a job')
// }

// let height;

// if (height) {
//     console.log(`Yayy height is defined`)
// } else {
//     console.log(`Height is UNDEFINED`)
// }


// Equality Operator

const age = 18;
if (age === 18) console.log(`You just became an adult 😊`);

// === is the strict equality operator, it does not do the type coercion

const favourite = Number(prompt(`What's is your favourite number ?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log(`Cool 23 is an amazing number!`)
} else if (favourite === 7) {
    console.log(`7 is also a cool number`)
} else {
    console.log(`Number is not 23 or 7`
    )
}

if (favourite !== 23) {
    console.log
        (`Why not the 23`)
}