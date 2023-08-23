/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

const vowelCheck: string [] = ["a", "e", "i", "o", "u"]

function vowels(s: string) {
    let count: number = 0
    let words: string[] = s.toLowerCase().split("")

    for ( let i = 0; i < words.length; i++){
        if (s.includes(vowelCheck[i])) {
            count++;
        }
    }
    return count;
}

export { vowels };
