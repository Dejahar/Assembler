const exercise07 = require('../07-exercise');

describe('07-exercise', () => {
    test('add the name "Alex" to the beginning of the names array using unshift()', () => {
        const expected = ['Alex', 'Mark', 'Ana'];

        expect(exercise07()).toMatchObject(expected);
    });
});
