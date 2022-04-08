/**
 * Fix the use of the global variable 'globalVariable' so that
 * it is not available globally anymore.
 *
 * Your solution should preserve the value: 'hello-world' of the variable.
 */

// Write you solution bellow this line
function exercise06Solution() {
    var globalVariable = 'hello-world';
    return globalVariable;
}

// Don’t change the code bellow this line
function exercise06Test() {
    return globalVariable;
}

module.exports = {
    exercise06Solution: exercise06Solution,
    exercise06Test: exercise06Test,
};