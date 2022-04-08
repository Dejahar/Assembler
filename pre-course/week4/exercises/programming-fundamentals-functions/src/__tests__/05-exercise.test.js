const exercise05 = require('../05-exercise');

describe('05-exercise', () => {
    test('return the sum of calling the getSum() and getMul() functions', () => {
        expect(exercise05()).toBe(116);
    });
});
