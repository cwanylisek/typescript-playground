"use strict";
var footballer = 'lewandowski';
var age = 31;
var isInjured = false;
//typescript unlike javascript is TYPE STRICT
isInjured = !isInjured;
console.log(footballer, age, isInjured);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(2), 'circ diameter');
// ARRAYS
var names = ['Marian', 'Zofia', 'Tomek'];
names.push('Krzysiek');
var numbers = [1, 2, 5, 8];
numbers[0] = 0;
var mixed = ['Krzysztof', 3, 'Basia', 17, 22]; // if defined with mixed types can be populated with those
mixed.push('Bartek');
mixed.push(99);
console.log(names);
console.log(numbers);
console.log(mixed);
// OBJECTS
var ninja = {
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
var player;
var count;
var isWinning;
count = 1;
player = 'Bartek';
isWinning = true;
var players = []; // declaring array of strings with empty array
players.push('Grzegorz');
console.log(players);
var union = []; // declaring union type array
union.push('Czwartek');
union.push(4);
union.push(true);
console.log(union, 'UNION');
var uid;
uid = 123;
console.log(uid);
var playerOne;
playerOne = { name: 'Jacek', belt: 'black', age: 52 };
console.log(playerOne);
//or
var playerTwo;
playerTwo = { name: 'Rafal', belt: 'green', age: 12 };
console.log(playerTwo);
var myAge = 26; // basically makes no sense using it if we want to have TS functionality
console.log(myAge);
myAge = { name: 'Kilian', age: 20 };
console.log(myAge);
// FUNCTIONS
var greet;
greet = function () {
    console.log('yo yo');
};
greet();
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(2, 3, '3');
var minus = function (a, b) {
    return a - b;
};
var result = minus(27, 7);
console.log(result);
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
logDetails(2, "Bartek");
var userDetails = function (user) {
    console.log("hello " + user.name + " you have " + user.uid + " id");
};
userDetails({ name: 'Bartek', uid: 2 });
// FUNCTION SIGNATURES
//1
var welcome;
welcome = function (name, greeting) {
    console.log(name + " says " + greeting);
};
welcome('Yannick', 'Witaj');
//2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(3, 33, 'add'));
//3
var loggingDetails;
loggingDetails = function (user) {
    console.log(user.name + " is " + user.age + " years old");
};
var usr = {
    name: "Rafal",
    age: 40
};
loggingDetails(usr);
