/**
 * Complete the function bellow to:
 *
 * Return the sum of all the odd numbers in the nums array
 *
 * NOTE:
 * You will have to learn how to use the % operator
 */

// Complete the code to the function
function exercise11() {
    let totalOdd = 0;
    let nums = [1, 2, 3, 6, 7, 11, 2, 12];
    nums.forEach(element => {
        if (element % 2 == 0)
        totalOdd += element;
    });
    return totalOdd;
}

module.exports = exercise11;