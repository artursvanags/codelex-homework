export {};

const repeatString = (input: string, amount: number): string => {
    return input.repeat(amount)
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
