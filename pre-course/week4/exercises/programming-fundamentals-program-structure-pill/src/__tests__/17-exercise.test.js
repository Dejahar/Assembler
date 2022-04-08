const exercise17 = require('../17-exercise');

describe('17-exercise', () => {
    test('changes the current item with the next item if current > next', () => {
        expect(exercise17()).toMatchObject([4, 3, 2, 1, 5]);
    });
});
