/**
 * Write a program using the for of loop to console.log
 * all the individual characters in the 'str' variable
 *
 * let str = "hello-world";
 * => h, e, l, l, o, -, w, o, r, l, d
 */
function exercise14() {
    let str = 'hello-world';

    // Write your solution here
    for (const iterator of str) {
        console.log(iterator);
    }
}

module.exports = exercise14;
