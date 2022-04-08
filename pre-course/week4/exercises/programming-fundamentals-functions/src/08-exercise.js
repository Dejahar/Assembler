/**
 * Complete the function bellow to:
 *
 * 1. receive a parameter named 'callback' which is a function
 * 2. execute a 'forEach' loop on the nums array
 * 3. call the 'callback' parameter inside the 'forEach' loop
 *    and passes the current item in the nums array
 *    as a parameter to the 'callback' function.
 *
 * NOTE:
 * You will need to add the parameter to the exercise08() function
 */
function exercise08(callback) {
    let nums = [1, 2, 3, 4, 5];
    // Write your code bellow this line
    nums.forEach( (elemental) => {
        callback(elemental);
    });
}

module.exports = exercise08;
