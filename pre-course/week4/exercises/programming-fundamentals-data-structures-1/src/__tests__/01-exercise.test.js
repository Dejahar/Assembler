const exercise01 = require('../01-exercise');

describe('01-exercise', () => {
    test('store the lengths of the arrays using `push()` in the `arrayLengths` array', () => {
        expect(exercise01()).toEqual(expect.arrayContaining([3, 5]));
    });
});
