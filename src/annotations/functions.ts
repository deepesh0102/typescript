const add = (a: number, b: number): number => {
	return a + b;
};

/* 
NOTE: This function is Anonymous
*/
const subtract = (a: number, b: number): number => {
	return a - b;
};

/* 
NOTE: This is name function
*/
function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

// NOTE: return null or undefined or No return value
const logger = (message: string): void => {
	console.log(message);
};

// NOTE: never return any thing
const throwError = (message: string): never => {
	throw new Error(message);
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

/* const logWeather = (forecast: { date: Date; weather: string }) => {
	console.log(forecast.date);
	console.log(forecast.weather);
}; */

// ! Destructuring In function
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
	let a = 10;
	console.log('file: functions.ts ~ line 46 ~ logWeather ~ a', a);
	console.log('🚀 ~ file: functions.ts ~ line 46 ~ logWeather ~ a', a);
	console.log(date);
	console.log(weather);
};

// !ES2015 SYNTAX
/* const logWeather = ({ date, weather }) => {
	console.log(date);
	console.log(weather);
}; */

logWeather(todaysWeather);

export {};
