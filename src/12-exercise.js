/**
 * Create a loop using the "for in" loop that
 * changes the value of the current item in the array:
 *
 * - If the number is smaller than 10:
 * Array item value = 'was smaller'
 *
 * - If the number is equal to 10:
 * Array item value = 'was equal'
 *
 * - If the number is larger than 10:
 * Array item value = 'was larger'
 *
 * @example
 * [1, 15, 10] => ["was smaller", "was larger", "was equal"]
 */

function exercise12() {
    let numbers = [1, 22, 4, 10, 15, 10, 5, 8, 12];
    // Write your solution bellow this line
    for (let i in numbers) {
        if (numbers[i] < 10) numbers[i] = 'was smaller';
        else if (numbers[i] == 10) numbers[i] = 'was equal';
        else numbers[i] = 'was larger';
    }
    // Don’t change the code bellow this line
    return numbers;
}

module.exports = exercise12;
