const exercise13 = require('../13-exercise');

describe('13-exercise', () => {
    test('use the built-in `Object.keys` method to get the keys of the object', () => {
        expect(exercise13()).toEqual(
            expect.arrayContaining([
                'firstname',
                'lastname',
                'age',
                'ocupation',
                'role',
            ]),
        );
    });
});
