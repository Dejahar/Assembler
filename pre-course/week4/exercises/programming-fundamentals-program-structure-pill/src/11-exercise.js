/**
 * Create a while loop that concatenates
 * the character "#" the variable "str"
 * so that "str" has 7 "#" characters.
 *
 * str should have the final value: "#######"
 */
function exercise11() {
    let str = '';

    // Write your solution bellow this line
    let i = 0;
    while (i < 7) {
        str += '#';
        i++;
    }
    // Don’t change the code bellow this line
    return str;
}

module.exports = exercise11;