/**
 * Use the built-in `Object.assign` method to:
 *
 * 1. create a copy of the person object and store it in the `copy` object
 * 2. Add the properties:
 *    ocupation: 'developer'
 *    role: 'sys-admin'
 *
 * 3. return the copy object
 */
function exercise17() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
    };

    let copy = {};

    // Write your solution bellow this line
    copy = {
        ocupation: 'developer',
        role: 'sys-admin',
    };

    Object.assign(copy, person);
    return copy;
}

module.exports = exercise17;
