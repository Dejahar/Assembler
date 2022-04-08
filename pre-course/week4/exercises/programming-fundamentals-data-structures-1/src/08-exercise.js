/**
 * Use the built in `find()` method of arrays to:
 *
 * 1. find the city "Berlin"
 * 2. save it in a variable
 * 3. return the variable
 */
function exercise08() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];

    // Write your solution bellow this line
    function findBerlin(cities){
        return cities == "Berlin";
    }
    let city = cities.find(findBerlin);
    return city;
}

module.exports = exercise08;
