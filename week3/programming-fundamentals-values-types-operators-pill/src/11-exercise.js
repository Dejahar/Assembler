/**
 * Save in the variable total the result of:
 *
 * 1. Obtain the remainder of 5 modulus of 'a'
 * 'a' % 5 (use the modulus operator)
 *
 * 2. then add 10 to the previous result
 * 3. then multiply it by 2
 */
function getTotal() {
  let a = 21;
  let total;

  // Add your code here
  total = (a % 5 + 10) * 2;
  // Don’t change this code
  return total;
}

export default getTotal;