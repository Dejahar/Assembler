const exercise06 = require('../06-exercise');

describe('06-exercise', () => {
    test('remove the first element in the names array using shift()', () => {
        const expected = ['Mark', 'Ana'];

        expect(exercise06()).toMatchObject(expected);
    });
});
