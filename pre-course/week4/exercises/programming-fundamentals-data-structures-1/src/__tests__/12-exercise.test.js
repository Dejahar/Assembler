const exercise12 = require('../12-exercise');

describe('12-exercise', () => {
    test('use the `delete` operator to remove the `password` property', () => {
        expect(exercise12()).toEqual({
            firstname: 'Mark',
            lastname: 'Gulman',
            age: 34,
        });
    });
});
