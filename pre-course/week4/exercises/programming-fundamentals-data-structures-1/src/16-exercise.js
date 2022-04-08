/**
 * Use the built-in `Object.assign` method to:
 *
 * create a copy of the person object and store it in the `copy` object
 */
function exercise16() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        ocupation: 'developer',
        role: 'sys-admin',
    };

    let copy = {};

    // Write your solution bellow this line
    Object.assign(copy, person);

    // Don’t change the code bellow this line
    return {
        person: person,
        copy: copy,
    };
}

module.exports = exercise16;
