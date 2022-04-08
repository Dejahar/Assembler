/**
 * Use the built-in `Object.entries` method to:
 *
 * 1. get the entries of the `person` object
 * 2. return the array of entries from the function
 */
function exercise15() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        ocupation: 'developer',
        role: 'sys-admin',
    };

    // Write your solution bellow this line
    return Object.entries(person);
}

module.exports = exercise15;
