const exercise05 = require('../05-exercise');

describe('05-exercise', () => {
    test('write a function that returns the sum of 3 parameters', () => {
        expect(exercise05(5, 5, 20)).toBe(30);
    });
});
