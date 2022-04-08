/**
 * Complete the function bellow to:
 *
 * 1. receive an array of numbers as a parameter
 * 2. multiply each items in the array by 2
 * 3. return the array.
 *
 * NOTE: You will have to add the parameters to the function
 */

// Complete the code to the function
const numbers = [1,2,3,4];

function exercise01(numbers) {
    const multiplyArray = [];

    numbers.forEach(element => {
        multiplyArray.push(element*2);
    });

    return multiplyArray;
}

exercise01(numbers);

module.exports = exercise01;
