export {};

function getNumber():number {
	const min: number = 0
	const max: number = 500
	return Math.random() * (max - min) + min;
}

const result = Math.ceil(getNumber()); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
