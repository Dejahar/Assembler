/**
 * Use the built in `push()` method of arrays to:
 *
 * 1. Add a new employee named `Alex` to the employees array of the `data` object
 * 2. return the data object from the function
 */
function exercise10() {
    const data = {
        cities: ['Barcelona', 'Madrid', 'Paris'],
        employees: ['Mark', 'John', 'Chris'],
    };

    // Write your solution bellow this line
    data.employees.push("Alex");
    return data;
}

module.exports = exercise10;
