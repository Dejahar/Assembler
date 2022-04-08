const exercise10 = require('../10-exercise');

describe('10-exercise', () => {
    test('create a while loop to multiply by 2 every number in the "numbers" array', () => {
        expect(exercise10()).toMatchObject([2, 4, 8, 10, 12, 14, 16, 18]);
    });
});
