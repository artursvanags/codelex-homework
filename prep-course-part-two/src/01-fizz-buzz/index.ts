/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

type checkProps = {
    n: number,
    answer: string
};

let check: checkProps[] = [
    { n: 3, answer: 'fizz' },
    { n: 5, answer: 'buzz' }
];

function fizzBuzz(n: number) { 
    for (let i = 1; i <= n; i++) {  
        if (i % check[0].n === 0 && i % check[1].n === 0) {
            return check[0].answer + check[1].answer
        }
        else if (i % check[0].n === 0) {
            return check[0].answer
        } 
        else if (i % check[1].n === 0) {
            return check[1].answer
        }
        else {
            return i
        }
    }
}

export { fizzBuzz };
