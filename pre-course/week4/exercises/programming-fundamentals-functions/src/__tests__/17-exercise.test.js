const exercise17 = require('../17-exercise');

describe('17-exercise', () => {
    test('use recursion to add 1 to a number until it reaches 20 to return 20', () => {
        expect(exercise17(1)).toBe(20);
    });
});
