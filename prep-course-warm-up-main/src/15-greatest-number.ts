export {};

function greatest(x: number, y: number) {
    if (x>y) {
        return x;
    } else if (x<y) {
        return y;
    }
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
