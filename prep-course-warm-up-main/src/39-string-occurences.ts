export {};

const count = (text:string, keyword:string) => {
    let count = 0
    const string = text.split(' ');
    
    for (let i = 0; i < string.length; i++) {
        if ( string[i].toLowerCase() === keyword.toLowerCase()) {
            count++
        }
    }
    return count
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
