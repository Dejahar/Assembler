/**
 * Create an array of objects with the data of 3 persons
 *
 * 1. create 3 objects for the following people:
 *
 * Person 1:
 *
 * firstName: "Ana"
 * lastName: "John"
 * age: 32
 *
 * Person 2:
 *
 * firstName: "Alex"
 * lastName: "Spence"
 * age: 24
 *
 * Person 3:
 *
 * firstName: "Mark"
 * lastName: "Smith"
 * age: 43
 *
 * The final array should look like:
 *
 * data = [
 *     { key: 'value', key: 'value' },
 *     { key: 'value', key: 'value' },
 * ];
 *
 * 2. Return the array of objects
 */
function exercise18() {
    const Person1 = {
        firstName: "Ana",
        lastName: "John",
        age: 32,
    };
    const Person2 = {
        firstName: "Alex",
        lastName: "Spence",
        age: 24,
    };
    const Person3 = {
        firstName: "Mark",
        lastName: "Smith",
        age: 43,
    };

    let array = [Person1,Person2,Person3];
    return array;
}

module.exports = exercise18;
