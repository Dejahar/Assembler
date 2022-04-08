/**
 * Complete the function bellow to:
 *
 * Return the sum of the negative numbers in the 'nums' array
 */

// Complete the code to the function
function exercise15() {
    let nums = [20, -10, 30, -5, -15, 50, -10];
    let negativeSum = 0;
    for (const iterator of nums) {
        if (iterator < 0)
            negativeSum += iterator;
    }
    return negativeSum;
}

module.exports = exercise15;