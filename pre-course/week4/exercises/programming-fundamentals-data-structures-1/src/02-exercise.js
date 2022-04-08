/**
 * 1. Access the `firstname` and `lastname` properties
 *    of the `person` object that the function receives
 *    as a parameter.
 *
 * 2. Store in the variable `result` the string:
 *
 * `My name is ` + person firstname + " " + person lastname
 *
 * 3. return the `result` variable
 *
 * @example
 *
 * object = { firstname: 'Mark', lastname: 'Peter' };
 * `My name is Mark Peter`
 *
 * object = { firstname: 'Ana', lastname: 'Soto' };
 * `My name is Ana Soto`
 *
 * NOTE:
 * You will need to access the values by using `dot notation`
 * let firstname = person.firstname; // Ana
 */
function exercise02(person) {
    let result = '';

    // write your solution bellow this line
    result = "My name is "+person.firstname+" "+person.lastname;
    return result;
}

module.exports = exercise02;
