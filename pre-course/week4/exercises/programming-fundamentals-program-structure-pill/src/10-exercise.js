/**
 * Create a while loop that multiplies by 2
 * every element in the "numbers" array.
 */
function exercise10() {
    let numbers = [1, 2, 4, 5, 6, 7, 8, 9];
    let i = 0;
    // Write your solution bellow this line
    while( i < numbers.length){
        numbers[i] = numbers[i]*2;
        i++;
    }
    // Don’t change the code bellow this line
    return numbers;
}

module.exports = exercise10;
