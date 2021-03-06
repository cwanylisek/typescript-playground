let footballer = 'lewandowski';
let age = 31;
let isInjured = false;
//typescript unlike javascript is TYPE STRICT
isInjured = !isInjured;

console.log(footballer, age, isInjured);

const circ = (diameter: number) => {  // declaring type wanted
    return diameter * Math.PI;
}

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

ninja = {   // you can overwrite the whole object but it has to be done with the same properties as declared
    name: 'yoshi',
    belt: 'orange',
    age: 56,
    //skills: ['lighting ball']  <- this can't be done
}

// EXPLICIT TYPES

let player: string;
let count: number;
let isWinning: boolean;

count = 1;
player = 'Bartek';
isWinning = true;

let players: string[] = []; // declaring array of strings with empty array
players.push('Grzegorz');

console.log(players);

let union: (string | number | boolean)[] = [];  // declaring union type array

union.push('Czwartek');
union.push(4);
union.push(true);

console.log(union, 'UNION');

let uid: string | number;
uid = 123;

console.log(uid)

let playerOne: object;
playerOne = { name: 'Jacek', belt: 'black', age: 52 };

console.log(playerOne);
//or
let playerTwo: {
    name: string,
    belt: string,
    age: number
};

playerTwo = { name: 'Rafal', belt: 'green', age: 12 };

console.log(playerTwo);

let myAge: any = 26; // basically makes no sense using it if we want to have TS functionality
console.log(myAge)

myAge = { name: 'Kilian', age: 20 };

console.log(myAge);

// FUNCTIONS

let greet: Function;

greet = () => {
    console.log('yo yo');
};
greet();

const add = (a: number, b: number, c: number | string = 10) => { // c? == parameter is optional | like this its going to = 10 if not specified
    console.log(a + b);
    console.log(c);
}

add(2, 3, '3');

const minus = (a: number, b: number) => {
    return a - b;
}

let result = minus(27, 7);

console.log(result);

// TYPE ALIASES
// to prevent building complex type declarations in functions etc.

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

logDetails(2, "Bartek");

const userDetails = (user: objWithName) => {
    console.log(`hello ${user.name} you have ${user.uid} id`);
}

userDetails({ name: 'Bartek', uid: 2 });

// FUNCTION SIGNATURES
//1

let welcome: (a: string, b: string) => void;

welcome = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

welcome('Yannick', 'Witaj');

//2

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

console.log(calc(3, 33, 'add'))

//3

let loggingDetails: (objectOne: { name: string, age: number }) => void;

type person = { name: string, age: number };

loggingDetails = (user: person) => {
    console.log(`${user.name} is ${user.age} years old`);
}

let usr = {
    name: "Rafal",
    age: 40
}

loggingDetails(usr);