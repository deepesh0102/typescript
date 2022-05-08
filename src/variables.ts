/*
Description: 
Output: 
*/
const apples: number = 5;

/*
Description: 
Output: 
Error: Can not redeclare apples block-scoped 
*/
//const apples: string = 6;

let speed: string = 'fast';

let hasName: boolean = false;

let nothingMuch: null = null;

let nothing: undefined = undefined;

/* In built */

const Data: Date = new Date();

/* Array */
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];

/* Classes */
class Car {}
const car: Car = new Car();

/* Object Literal */
let points: { x: number; y: number } = {
	x: 20,
	y: 10,
};

/* Function */

const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

/* 1) Function Return Type Any */

const values: string = '{"x":10, "y":20}';

const jsonData: { x: number; y: number } = JSON.parse(values);

console.log(jsonData);

/**
 * concept: When wce declare a variable on one line and Initialization Later
 *
 */

let words = ['red', 'green', 'you'];

let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'red') foundWords = true;
}

/* 
concept: Variable Whose type can not be inferred correctly 
*/

let number = [-10, -1, 12];
let numberAboveZero: number | boolean = false;
for (let i = 0; i < number.length; i++) {
	if (number[i] > 0) numberAboveZero = number[i];
}

export {};
