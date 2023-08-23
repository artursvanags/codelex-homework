/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

//result needs to add a new line depending on the number
const n1:number[] = [1,2,3]

function pyramid(n: number) {
    const char = "#"
    let result = ""

    if ( n <= 0) {
        return "number is not positive"
    } else {
        for ( let i = 0 ; i < n; i++){
            const spaces = " ".repeat(n - i - 1);
            const put = char.repeat(2 * i + 1);
            result += spaces + put + spaces + "\n";

        }
    }
    return result
}

function displayPyramids(callback: (n: number) => string, n: number[]) {
    for (let i = 0; i < n.length; i++) {
        console.log(callback(n[i]));
    }
}

displayPyramids(pyramid, n1);

export { pyramid };