/**
 * Write a program using the forEach loop to console.log
 * all the days in the 'days' array
 * and concatenate the string:
 *
 * "Today is " + day element in the array
 *
 * => Today is Monday
 * => Today is Tuesday
 * ...
 */
function exercise16() {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    // Write your solution here
    days.forEach(element => {
        console.log('Today is '+ element);
    });
}

module.exports = exercise16;
