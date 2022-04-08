const exercise16 = require('../16-exercise');

describe('16-exercise', () => {
    test('use the built-in `Object.assign` method to make a copy of the person object', () => {
        expect(exercise16().person).toEqual(exercise16().copy);
    });
});
