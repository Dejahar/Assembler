/**
 * Create a switch statement that stores
 * in the variable result the values:
 *
 * for the case 1: "one"
 * for the case 2: "two"
 * for the case 3: "three"
 * for default case: "no number"
 *
 * It should only store 1 value.
 */
function exercise07(number) {
    let result;

    // Write your solution bellow this line
    switch (number) {
        case 1: result = 'one'; break;
        case 2: result = 'two'; break;
        case 3: result = 'three'; break;
        default: result = 'no number'; break;
    }

    // Don’t change the code bellow this line
    return result;
}

module.exports = exercise07;
