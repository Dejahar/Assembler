const exercise05 = require('../05-exercise');

describe('05-exercise', () => {
    test('remove the last 2 elements from the names array using pop()', () => {
        expect(exercise05()).toMatchObject(['John', 'Mark']);
    });
});
