/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let result = "";
    let count = 0;

    const charCount: { [key: string]: number } = {};

    const split = str.split("");
    for (let i = 0; i < split.length; i++) {
        const char = split[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }

        if (charCount[char] > count) {
            count = charCount[char];
            result = char;
        }
    }
    return result;
}

export { maxChar };
