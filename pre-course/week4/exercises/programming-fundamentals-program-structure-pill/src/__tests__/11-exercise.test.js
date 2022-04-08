const exercise11 = require('../11-exercise');

describe('11-exercise', () => {
    test('create a while loop to create the string "#######"', () => {
        expect(exercise11()).toHaveLength(7);
        expect(exercise11()).toBe('#######');
    });
});
