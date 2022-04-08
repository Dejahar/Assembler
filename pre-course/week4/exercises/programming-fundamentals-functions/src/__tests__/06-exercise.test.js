const exercise06 = require('../06-exercise');

describe('06-exercise', () => {
    test('return the array of numbers multiplied by 2 from the getNums() function', () => {
        expect(exercise06()).toMatchObject([2, 4, 6, 8, 10]);
    });
});
