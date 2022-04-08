/**
 * Complete the function bellow to:
 *
 * 1. receive 2 number parameters named 'a' and 'b'
 * 2. return 'error' when the 'a' and 'b' parameters are undefined
 * 3. return 'missing b parameter' when 'b' is undefined but not 'a'
 * 4. return 'a' + 'b' when 'a' and 'b' are not undefined
 */

// Complete the code to the function
function exercise07(a, b) {
    if (a == undefined && b == undefined)
        return 'error';
    else if (a != undefined && b == undefined)
        return 'missing b parameter';
    else if (a != undefined && b != undefined)
        return a + b;
}

exercise07();

module.exports = exercise07;