const exercise20 = require('../20-exercise');

describe('20-exercise', () => {
    test('use `indexOf` to return the indexes of `Lisbon` and `Paris`', () => {
        expect(exercise20()).toEqual(expect.arrayContaining([2, 4]));
    });
});
