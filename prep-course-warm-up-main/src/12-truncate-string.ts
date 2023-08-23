export {};

function truncateString(input:string, len:number): string {
    //const result = input.slice(0,len)
    const result = input.substring(0, len)
    return result
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
