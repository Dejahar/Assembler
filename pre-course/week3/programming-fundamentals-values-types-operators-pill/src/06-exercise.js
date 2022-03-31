/**
 * Write a program that stores in the variable result:
 *
 * When x and y are undefined:
 * result = 'error'
 *
 * When x is smaller than y:
 * result = 'smaller'
 *
 * When x is greater than y:
 * result = 'larger'
 *
 * When x is equal to y:
 * result = 'equal'
 *
 * NOTE: You will have to use 'if' or 'else if' statements
 * to compare the values of the x and y variables
 * using the JavaScript conditional operators: && or ||
 *
 * @example
 * if (a > b && b !== 5) {
 * // first condition
 * } else if (a > b && b === 5) {
 * // other condition
 * }
 */
function compareValues(x, y) {
  let result = "";

  // Add your code here
  if (x == undefined && y == undefined)
    result = 'error';
  else if (x < y)
    result = 'smaller';
  else if (x > y)
    result = 'larger';
  else if (x == y)
    result = 'equal';
  // Don’t change this code
  return result;
}

export default compareValues;