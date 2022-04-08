/**
 * 1. Create an array with the city names from the `cities` variable
 *    so that no duplicate values are included in the array.
 *
 *    The array should contain a city name only once, no duplicate names.
 *
 *    Use an array method or loop to remove the duplicates
 *    from the `cities` array and store the non-duplicate values
 *    in a new array. (some array methods return a new array)
 *
 * 2. Return the array of non-duplicate city names
 */
function exercise22() {
    const cities = [
        { id: 10, name: 'Barcelona' },
        { id: 11, name: 'Bucharest' },
        { id: 12, name: 'Madrid' },
        { id: 13, name: 'Barcelona' },
        { id: 14, name: 'Bucharest' },
        { id: 15, name: 'Barcelona' },
        { id: 16, name: 'Lisbon' },
        { id: 17, name: 'Berlin' },
        { id: 18, name: 'Barcelona' },
        { id: 19, name: 'Barcelona' },
        { id: 20, name: 'Sevilla' },
        { id: 21, name: 'Barcelona' },
        { id: 21, name: 'Barcelona' },
        { id: 21, name: 'Barcelona' },
        { id: 21, name: 'Bucharest' },
        { id: 21, name: 'Berlin' },
    ];

    // Write your solution bellow this line
    const names =[];
    present = false;
    cities.forEach(element => {
        names.forEach(index =>{
            if(element.name == index)
                present = true;
        })
        if(!present){
            names.push(element.name);
        }
        present = false;
    });

    return names;
}

module.exports = exercise22;
