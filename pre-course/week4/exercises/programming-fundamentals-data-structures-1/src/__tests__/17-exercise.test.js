const exercise17 = require('../17-exercise');

describe('17-exercise', () => {
    test('use the built-in `Object.assign` method to create the person object', () => {
        expect(exercise17()).toMatchObject({
            firstname: 'Mark',
            lastname: 'Gulman',
            age: 34,
            ocupation: 'developer',
            role: 'sys-admin',
        });
    });
});
