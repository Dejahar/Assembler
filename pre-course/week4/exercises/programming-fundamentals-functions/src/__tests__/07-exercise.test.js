const exercise07 = require('../07-exercise');

describe('07-exercise', () => {
    test('validate the a and b parameters and return a message', () => {
        expect(exercise07()).toMatch(/error/i);
        expect(exercise07(10)).toMatch(/missing b parameter/i);
        expect(exercise07(10, 10)).toBe(20);
    });
});
