/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums multidimensional array
 */

// Complete the code to the function
function exercise13() {
    let nums = [
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
    ];

    let total1s = 0;

    nums.forEach(element => {
        element.forEach(e =>{
            if(e == 1)
                total1s++;
        })
    });

    return total1s;
}

module.exports = exercise13;
