/**
 * Create a program that uses the do while loop
 * to iterate over the numbers from 0 to 20
 *
 * and to console.log the numbers:
 *
 * from 0 to 4 (including 0 and 4)
 *
 * from 16 to 20 (including 16 and 20)
 *
 * output => 0, 1, 2, 3, 4, 16, 17, 18, 19, 20
 */
function exercise13() {
    // Write your solution here
    i = 0;
    do {
        if ( (i >= 0 && i <= 4) || (i>=16 && i<=20))
            console.log(i);
        i++;
    } while (i <= 20);
}

module.exports = exercise13;