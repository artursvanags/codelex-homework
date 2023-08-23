/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let result: string[] = []
    let maxCount: number = 0
    
    const noSpecialCharacters = sen.replace(/[^a-zA-Z0-9 ]/g, '');
    const words:string[] = noSpecialCharacters.split(" ")

    for ( let i = 0; i < words.length; i++) {
        const countLetters: number = words[i].length
        
        if (countLetters > maxCount) {
            maxCount = countLetters
            result = [words[i]]
        }   
    }
    return result.toString()
}

// split words into array
// count each word length
// compare each word length and return one with highest
//
export { longestWord };
