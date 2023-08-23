export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
function convertToUSD(price: number): number {
    const input = (price * 1.4)
    const result = Math.round(input * 100) / 100
    return result;

}
// You are allowed to change this function
function convertToBRL(price: number): number {
    const convFee = 1.1
    const input = (price * 4.9) * convFee
    const result = Math.round(input * 100) / 100
    return result;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price);
const priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
