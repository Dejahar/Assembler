const exercise18 = require('../18-exercise');

describe('18-exercise', () => {
    test('use recursion to create the Fibonacci sequence until it reatches the number of loops requested (6 loops and recieve the result 21)', () => {
        expect(exercise18()).toBe(21);
    });
});
