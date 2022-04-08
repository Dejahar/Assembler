const exercise02 = require('../02-exercise');

describe('02-exercise', () => {
    test('return the sum of the 3 number parameters of the function', () => {
        expect(exercise02(1, 2, 3)).toBe(6);
    });
});
