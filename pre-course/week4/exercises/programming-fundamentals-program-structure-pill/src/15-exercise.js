/**
 * Write a program using the for in loop to console.log
 * all the individual characters in the 'str' variable
 *
 * let str = "hello-world";
 * => h, e, l, l, o, -, w, o, r, l, d
 */
function exercise15() {
    let str = 'hello-world';

    // Write your solution here
    for (const i in str) {
        console.log(str[i]);
    }
}

module.exports = exercise15;
