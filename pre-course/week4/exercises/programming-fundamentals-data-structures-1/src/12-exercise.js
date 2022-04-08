/**
 * Use the `delete` operator to remove the `password` property
 * from the `person` object.
 */
function exercise12() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        password: 'my-favorite-password-1234',
    };

    // Write your solution bellow this line
    delete(person.password);
    // Don’t change the code bellow this line
    return person;
}

module.exports = exercise12;
