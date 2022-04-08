const exercise14 = require('../14-exercise');

describe('14-exercise', () => {
    test('use the built-in `Object.values` method to get the values of the object', () => {
        expect(exercise14()).toEqual(
            expect.arrayContaining([
                'Mark',
                'Gulman',
                34,
                'developer',
                'sys-admin',
            ]),
        );
    });
});
