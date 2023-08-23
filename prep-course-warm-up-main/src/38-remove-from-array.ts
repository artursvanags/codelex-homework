export {};

const removeFromArray = function(arr:number[], ...items:number[]) {
    
    for ( let i = 0; i < items.length; i++) {
        const index = arr.indexOf(items[i])
        if (index !== -1) {
            arr.splice(index, 1)
        }
    }
    return arr
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]

/*
 * Want another challenge similar to this one?
 * Go back to exercise 15-greatest-number and refactor your previous solution so that
 * the function can accept unlimited number of arguments and still return the largest number.
 */

const returnLargest = function(...items:any[]) {
    const flatten = items.flat()
    return Math.max(...flatten)
}

console.log(returnLargest([1, 2, 3, 4], 3)); // Expected output: 4
console.log(returnLargest([1, 2, 3, 4], 7)); // Expected output: 7
console.log(returnLargest([1, 2, 3, 4], 7, 2)); // Expected output: 7
