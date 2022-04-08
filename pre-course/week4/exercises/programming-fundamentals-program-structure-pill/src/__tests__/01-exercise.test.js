const exercise01 = require('../01-exercise');

describe('01-exercise', () => {
    test('create variable names with upper and lower case first letter', () => {
        expect(exercise01()).toMatchObject([
            'First_variable',
            'first_variable',
        ]);
    });
});
