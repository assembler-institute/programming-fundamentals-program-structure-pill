/**
 * Fix the following switch statement to execute only one case
 */

function exercise08(dayNum) {
    let dayName;

    // Write your solution bellow this line
    switch (dayNum) {
        case 1: {
            dayName = 'Monday';
        }
        case 2: {
            dayName = 'Tuesday';
        }
        case 3: {
            dayName = 'Wednesday';
        }
        case 4: {
            dayName = 'Thursday';
        }
        case 5: {
            dayName = 'Friday';
        }
        case 6: {
            dayName = 'Saturday';
        }
        case 7: {
            dayName = 'Sunday';
        }
        default: {
            dayName = 'Day Not Found';
        }
    }

    // Don’t change the code bellow this line
    return dayName;
}

module.exports = exercise08;
