const exercise18 = require('../18-exercise');

describe('18-exercise', () => {
    test('create an array of person objects', () => {
        expect(exercise18()).toContainEqual(
            expect.objectContaining({
                firstName: 'Ana',
                lastName: 'John',
                age: 32,
            }),
            expect.objectContaining({
                firstName: 'Alex',
                lastName: 'Spence',
                age: 24,
            }),
            expect.objectContaining({
                firstName: 'Mark',
                lastName: 'Smith',
                age: 43,
            }),
        );
    });
});
