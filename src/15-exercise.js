/**
 * Write a program using the for in loop to console.log
 * all the individual characters in the 'str' variable
 *
 * let str = "hello-world";
 * => h, e, l, l, o, -, w, o, r, l, d
 */
function exercise15() {
    let str = 'hello-world';
    for(let c in str)console.log(str[c]);
    // Write your solution here
}

module.exports = exercise15;
