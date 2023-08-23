export {};

function trim(word: string) {
  return word.trim();
}

const result = trim("CODELEX  ");
console.log(trim(result)); // Expected output: "CODELEX"
console.log(result.length); // Expected output: 7
