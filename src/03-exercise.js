/**
 * Correct the variable names in the array based on the
 * variable naming rules in JavaScript.
 */
function exercise03() {
    // Correct the variable names in the array
    return [
        // remove the illegal characters from the variable name
        '*my_fir%st_variable',
        // remove the illegal characters from the variable name
        '01myFirstVariable',
        // remove the illegal characters from the variable name
        'MyFirst§Variable',
        // change the type of '-' to the one that JavaScript allows
        'my-first-variable',
    ];
}

module.exports = exercise03;
