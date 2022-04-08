/**
 * Complete the function bellow to:
 *
 * 1. receive an array of numbers by calling the getNums() function
 * 2. multiply all the items in the array by 2
 * 3. return the array.
 */

// Complete the code to this function
function exercise06() {
    const multiply = [];
    getNums().forEach(element => {
        multiply.push(element*2);
    });
    return multiply;
}

// Don’t change the code bellow this line
function getNums() {
    return [1, 2, 3, 4, 5];
}

module.exports = exercise06;
