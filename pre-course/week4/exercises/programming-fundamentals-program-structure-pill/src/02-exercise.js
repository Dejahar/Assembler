/**
 * Write the names of 4 variables based on the name 'my first variable'
 * Store the variable names you would use to create the variables in the array.
 *
 * 1. Write the first variable name in snake_case
 * 2. Write the second variable name in camelCase
 * 3. Write the third variable name in PascalCase
 * 4. Write the fourth variable name starting with:
 *    a '$' sign, an '_' and the variable name in camelCase
 */
function exercise02() {
    // Write the variable names in the array as strings
    return [
        // snake_case variable name ⬇
        'my_first_variable',
        // camelCase variable name ⬇
        'myFirstVariable',
        // PascalCase variable name ⬇
        'MyFirstVariable',
        // camelCase variable name starting with "$" and "_" ⬇
        '$_myFirstVariable',
    ];
}

module.exports = exercise02;
