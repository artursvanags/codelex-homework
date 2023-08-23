export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

function sorter(type: string): (a: number, b: number) => number {
    if (type === 'min') {
        return (a, b) => a - b;
    } else if (type === 'max') {
        return (a, b) => b - a;
    } else {
        return (a, b) => a - b;
    }
}

const min = (array: number[]): number => {
    /* alterantive
    const n: number = Math.min(...array);
    return n;
    */

    const n: number[] = array.sort(sorter('min'));
    return n[0];
};



const max = (array: number[]): number => {
    /* alterantive
    const n: number = Math.max(...array);
    return n;
    */

    const n: number[] = array.sort(sorter('max'));
    return n[0];
}

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
