/**
 * Fix the following switch statement to execute only one case
 */
function exercise08(dayNum) {
    let dayName;

    // Write your solution bellow this line
    switch (dayNum) {
        case 1: {
            dayName = 'Monday';break;
        }
        case 2: {
            dayName = 'Tuesday';break;
        }
        case 3: {
            dayName = 'Wednesday';break;
        }
        case 4: {
            dayName = 'Thursday';break;
        }
        case 5: {
            dayName = 'Friday';break;
        }
        case 6: {
            dayName = 'Saturday';break;
        }
        case 7: {
            dayName = 'Sunday';break;
        }
        default: {
            dayName = 'Day Not Found';break;
        }
    }

    // Don’t change the code bellow this line
    return dayName;
}

module.exports = exercise08;
