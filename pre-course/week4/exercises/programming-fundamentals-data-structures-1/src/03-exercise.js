/**
 * Create a method named: `logName`
 * on the `person` object,
 * that receives a `name` parameter
 * and that returns the string
 *
 * `I am ` + `name` parameter value
 *
 * @example
 * name = "Mark"
 *
 * `I am Mark`
 *
 * NOTE:
 * Methods are functions that are stored in the property
 * of an object.
 *
 * @example
 *
 *  let employee = {
 *  age: 25,
 *  getSalary: function getSalary(salary) {
 *      console.log(salary);
 *  },
 * };
 *
 * person.getSalary(25000); // 25000
 */
function exercise03() {
    let person = {
        age: 23,
        ocupation: 'developer',
        // Write your solution bellow this line
        logName: function(name){
            result = "I am "+name;
            return result;
        }
    };

    // Don’t change the code bellow this line
    return person;
}

module.exports = exercise03;
