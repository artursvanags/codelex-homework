export {};

type numProps = {
    a: number,
    b: number
}

function add(a: number, b:number):number {
    return a + b
}

function subtract(a: number, b:number):number {
    return a - b
}

function sum(arr: number[]):number {
    let sum: number = 0
    for ( let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function multiply(arr: number[]):number {
    let sum: number = 0
    for ( let i = 0; i < arr.length; i++) {
        sum = arr[i] * i
    }
    return sum
}
function power(a: number, b:number):number {
    return a ** b
    //return Math.pow(a,b) also works
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
