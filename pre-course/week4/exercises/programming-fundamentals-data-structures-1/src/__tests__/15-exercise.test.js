const exercise15 = require('../15-exercise');

describe('15-exercise', () => {
    test('use the built-in `Object.entries` method to get the entries of the object', () => {
        expect(exercise15()).toEqual([
            ['firstname', 'Mark'],
            ['lastname', 'Gulman'],
            ['age', 34],
            ['ocupation', 'developer'],
            ['role', 'sys-admin'],
        ]);
    });
});
