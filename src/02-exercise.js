/**
 * Write 4 elements inside the array below, based on the string 'first_variable',
 * following this requirements:
 *
 * 1. Write the first element name in snake_case
 * 2. Write the second element name in camelCase
 * 3. Write the third element name in PascalCase
 * 4. Write the fourth element name starting with:
 *    a '$' sign, followed by an '_', and the name in camelCase
 */

function exercise02() {
    // Write some names in the array as strings
    return [
        // snake_case element name ⬇
        'my_first_variable',
        // camelCase element name ⬇
        'myFirstVariable',
        // PascalCase element name ⬇
        'MyFirstVariable',
        // camelCase element name starting with "$" and "_" ⬇
        '$_myFirstVariable',
    ];
}

module.exports = exercise02;
