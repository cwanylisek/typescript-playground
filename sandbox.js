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
    age: 56
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