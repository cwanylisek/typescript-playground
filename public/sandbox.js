"use strict";
let footballer = 'lewandowski';
let age = 31;
let isInjured = false;
//typescript unlike javascript is TYPE STRICT
isInjured = !isInjured;
console.log(footballer, age, isInjured);
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(2), 'circ diameter');
// ARRAYS
let names = ['Marian', 'Zofia', 'Tomek'];
names.push('Krzysiek');
let numbers = [1, 2, 5, 8];
numbers[0] = 0;
let mixed = ['Krzysztof', 3, 'Basia', 17, 22]; // if defined with mixed types can be populated with those
mixed.push('Bartek');
mixed.push(99);
console.log(names);
console.log(numbers);
console.log(mixed);
// OBJECTS
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 26
};
ninja.age = 30;
console.log(ninja);
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 56,
};
// EXPLICIT TYPES
let player;
let count;
let isWinning;
count = 1;
player = 'Bartek';
isWinning = true;
let players = []; // declaring array of strings with empty array
players.push('Grzegorz');
console.log(players);
let union = []; // declaring union type array
union.push('Czwartek');
union.push(4);
union.push(true);
console.log(union, 'UNION');
let uid;
uid = 123;
console.log(uid);
let playerOne;
playerOne = { name: 'Jacek', belt: 'black', age: 52 };
console.log(playerOne);
//or
let playerTwo;
playerTwo = { name: 'Rafal', belt: 'green', age: 12 };
console.log(playerTwo);
let myAge = 26; // basically makes no sense using it if we want to have TS functionality
console.log(myAge);
myAge = { name: 'Kilian', age: 20 };
console.log(myAge);
// FUNCTIONS
let greet;
greet = () => {
    console.log('yo yo');
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(2, 3, '3');
const minus = (a, b) => {
    return a - b;
};
let result = minus(27, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
logDetails(2, "Bartek");
const userDetails = (user) => {
    console.log(`hello ${user.name} you have ${user.uid} id`);
};
userDetails({ name: 'Bartek', uid: 2 });
// FUNCTION SIGNATURES
//1
let welcome;
welcome = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
welcome('Yannick', 'Witaj');
//2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(3, 33, 'add'));
//3
let loggingDetails;
loggingDetails = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
let usr = {
    name: "Rafal",
    age: 40
};
loggingDetails(usr);
