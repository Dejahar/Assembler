const exercise04 = require('../04-exercise');

describe('04-exercise', () => {
    test('add the new names to the names array', () => {
        expect(exercise04()).toHaveLength(4);
    });
});
