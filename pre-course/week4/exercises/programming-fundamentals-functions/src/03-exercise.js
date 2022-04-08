/**
 * Complete the function bellow to:
 *
 * 1. receive 2 number parameters named 'a' and 'b'
 * 2. return 'a' * 'b' when 'a' and 'b' are not undefined
 * 3. return 'a' * 'a' when 'b' is undefined
 */

// Complete the code to the function
function exercise03(a, b) {
    if (a != undefined && b != undefined)
        return a * b;
    else if (b == undefined)
        return a * a;
}

exercise03(1);

module.exports = exercise03;