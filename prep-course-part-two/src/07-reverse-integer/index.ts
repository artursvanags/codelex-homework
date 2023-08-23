/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    const checkIsNegative = int < 0; // check if int is below zero ( or is negative )

    let convertToAbs = Math.abs(int) // Make all numbers absolute
    let extractNumbers = convertToAbs.toString().split("").reverse().join('') // Stringify, reverse and stich everything back
    let convertBack = parseInt(extractNumbers) // Convert back to interger

    if ( checkIsNegative ) {
        return -convertBack
    } else {
        return convertBack
    }
}

export { reverse };
