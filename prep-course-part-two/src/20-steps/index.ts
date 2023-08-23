/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {
    const char = "#"
    let result = ""

    if ( n <= 0) {
        return "number is not positive"
    } else {
        for ( let i = 0 ; i < n; i++){
            result += char.repeat(i + 1) + "\n"
        }
    }
    console.log(result)
    return result
}

export { steps };
