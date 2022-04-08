const exercise03 = require('../03-exercise');

describe('03-exercise', () => {
    test('complete the function to return a * b or a * a', () => {
        expect(exercise03(2, 3)).toBe(6);
        expect(exercise03(2)).toBe(4);
    });
});
