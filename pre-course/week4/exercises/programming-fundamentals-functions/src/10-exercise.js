/**
 * Learn how scope works.
 *
 * You will have to console.log the 'globalVar' variable
 * inside the 'exercise10Global' function,
 * to observe that it outputs 'hello-world'.
 *
 * Then you will have to execute the same console.log
 * inside the 'exercise10Inner' function to observe that it
 * outputs 'hola-mundo' instead.
 *
 * Even though the variables have the same name,
 * because of scope, they have different values.
 */

// Global Scope
var globalVar = 'hello-world';

function exercise10Global() {
    // Write the first console.log bellow this line
    console.log(globalVar);
}

function exercise10Inner() {
    // Inner Scope
    var globalVar = 'hola-mundo';

    // Write the second console.log bellow this line
    console.log(globalVar);
}

module.exports = {
    exercise10Global,
    exercise10Inner,
};
