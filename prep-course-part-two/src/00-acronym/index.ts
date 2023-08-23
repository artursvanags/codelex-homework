/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    input = input.replace(/-/g, ' ');
    input = input.replace(/_/g, ' ');
    let words: string[] = input.split(/\s+/); 
    let acronym: string = "";

    for (let i = 0; i < words.length; i++) {
        acronym += words[i].charAt(0).toUpperCase(); 
    }
    return acronym; 
}

export { parse };