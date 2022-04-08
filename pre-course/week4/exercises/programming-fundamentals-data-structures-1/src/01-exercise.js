/**
 * Use the built in `push()` method of arrays
 * to add the lengths of the `names` and `cities` arrays
 * to the `arrayLengths` array.
 *
 * NOTE:
 * Use the property that arrays have to get the length,
 * not by counting the number of elements yourself.
 */
function exercise01() {
    const names = ['Mark', 'John', 'Anna'];
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];
    const arrayLengths = [];

    // write your solution bellow this line
    const namesLength = names.length;
    const citiesLength = cities.length;

    arrayLengths.push(namesLength);
    arrayLengths.push(citiesLength);
    // Don’t change the code bellow this line
    return arrayLengths;
}

module.exports = exercise01;
