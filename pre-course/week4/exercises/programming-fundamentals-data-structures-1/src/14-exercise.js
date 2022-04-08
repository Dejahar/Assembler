/**
 * Use the built-in `Object.values` method to:
 *
 * 1. get the values of the `person` object
 * 2. return the array of values from the function
 */
function exercise14() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        ocupation: 'developer',
        role: 'sys-admin',
    };

    // Write your solution bellow this line
    return Object.values(person);
}

module.exports = exercise14;
