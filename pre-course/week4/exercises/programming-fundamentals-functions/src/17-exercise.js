/**
 * Complete the function bellow to:
 *
 * Receive the initial number value `1` as a parameter
 * which will keep incrementing until it reaches 20 to return the final value 20.
 *
 * NOTE:
 * Your browser might get frozen if you don’t stop the recursive function
 * It’s the same as an infinite loop.
 */

// Complete the code to the function
function exercise17(number) {
    // Write the solution bellow this line

    while (number < 20) {
        number++;
    }
    return number;
}

module.exports = exercise17;