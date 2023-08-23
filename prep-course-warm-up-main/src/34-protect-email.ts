export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

function protectEmail(input:string):string {
    const [string, domain] = input.split("@")
    let firstString:string = ""

    if ( string.length <= 2) {
        firstString = "..."
    } else if (string.length >= 2 && string.length <= 5) {
        firstString = string.slice(0,2) + "..."
    } else {
        firstString = string.slice(0,3) + "..."
    }
    
    return `${firstString}@${domain}`;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com