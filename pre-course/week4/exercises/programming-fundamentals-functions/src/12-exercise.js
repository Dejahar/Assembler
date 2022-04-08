/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums array
 */

// Complete the code to the function
function exercise12() {
    let total1s = 0;
    let nums = [1, 0, 1, 0, 1, 1, 0, 0];
    nums.forEach(element => {
        if(element == 1)
            total1s++;
    });

    return total1s;
}

module.exports = exercise12;
