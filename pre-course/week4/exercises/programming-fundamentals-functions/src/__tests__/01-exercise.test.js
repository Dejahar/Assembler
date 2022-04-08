const exercise01 = require('../01-exercise');

describe('01-exercise', () => {
    test('multiply each item in the array parameter by 2 and return the array', () => {
        expect(exercise01([1, 2, 3, 4, 5])).toMatchObject([2, 4, 6, 8, 10]);
    });
});
