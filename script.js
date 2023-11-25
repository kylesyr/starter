/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Kyle');
console.log(30);

let firstName = "Kyle";
let age = 30;
console.log(firstName, age);

// Variable name conventions
let person = 'Kyle';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 30);
// console.log(typeof 'Kyle');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1993;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Syriste';
console.log(lastName);


// Math operators
const now = 2037;
const ageKyle = now - 1993;
const ageSarah = now - 2018;
console.log(ageKyle, ageSarah);

console.log(ageKyle * 2, ageKyle / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Kyle';
const lastName = 'Syriste';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

//Comparison operators
console.log(ageKyle > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2019);

const now = 2037;
const ageKyle = now - 1993;
const ageSarah = now - 2018;

console.log(now - 1993 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageKyle + ageSarah) / 2;
console.log(ageKyle, ageSarah, averageAge);



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = Math.round(massMark / heightMark ** 2);
const BMIJohn = Math.round(massJohn / heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn;

console.log('Mark:' + BMIMark + '%', ' ' + 'John:' + BMIJohn + '%', markHigherBMI);

const massKyle = 95;
const heightKyle = 1.80;
const kyleBMI = Math.round(massKyle / heightKyle ** 2);

console.log('Kyle:' + kyleBMI + '%');


const firstName = 'Kyle';
const job = 'Full-Stack Engineer';
const birthYear = 1993;
const year = 2023;

const kyle = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(kyle);

const kyleNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(kyleNew);

console.log(`String
multiple
lines
together`);
*/

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};

const birthYear = 1993;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);
