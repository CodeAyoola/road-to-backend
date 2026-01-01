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

// const age = 18;
// if (age === 18) console.log(`You just became an adult 😊`);

// // === is the strict equality operator, it does not do the type coercion

// const favourite = Number(prompt(`What's is your favourite number ?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log(`Cool 23 is an amazing number!`)
// } else if (favourite === 7) {
//     console.log(`7 is also a cool number`)
// } else {
//     console.log(`Number is not 23 or 7`
//     )
// }

// if (favourite !== 23) {
//     console.log
//         (`Why not the 23`)
// }


// Boolean Logic
// Logical Operator

// const hasDriverLicense = true; // A
// const hasGoodVison = true; // B

// console.log(hasDriverLicense && hasGoodVison);
// console.log(hasDriverLicense || hasGoodVison);
// console.log(!hasDriverLicense && hasGoodVison);



// // if (hasDriverLicense && hasGoodVison) {
// //     console.log(`Sarah should drive!`)
// // } else {
// //     console.log(`Someone else should drive...`)
// // }

// const isTired = false // C

// console.log(hasDriverLicense || hasGoodVison || isTired);

// if (hasDriverLicense && hasGoodVison && !isTired) {
//     console.log(`Sarah should drive!`)
// } else {
//     console.log(`Someone else should drive...`)
// }

// Third Coding Challenge

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// let averageDolphins = Math.trunc((96 + 108 + 89) / 3);
// let averageKoalas = Math.trunc((88 + 91 + 110) / 3);

// console.log(averageDolphins, averageKoalas)

// if (averageDolphins > averageKoalas) {
//     console.log(`Dolphins wins 🏆`)
// } else if (averageKoalas > averageDolphins) {
//     console.log(`Koalas wins 🏆`)
// } else {
//     `Both team tied`
// }

// averageDolphins = Math.trunc((97 + 112 + 101) / 3);
// averageKoalas = Math.trunc((109 + 95 + 123) / 3);

// console.log(averageDolphins, averageKoalas)

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins wins 🏆`)
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log(`Koalas wins 🏆`)
// } else {
//     `No team wins the trophy`
// }


// averageDolphins = Math.trunc((80 + 112 + 101) / 3);
// averageKoalas = Math.trunc((90 + 95 + 106) / 3);

// console.log(averageDolphins, averageKoalas)

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log(`Dolphins wins 🏆`)
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log(`Koalas wins 🏆`)
// } else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {
//     console.log(`Both teams tied`)
// } else {
//     console.log(`No one wins the trophy`)
// }


// The Switch Statement

let day = 'sunday';

// switch (day) {
//     case 'monday': // day === 'monday
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy your weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy your weekend');
} else {
    console.log('Not a valid day!');
}