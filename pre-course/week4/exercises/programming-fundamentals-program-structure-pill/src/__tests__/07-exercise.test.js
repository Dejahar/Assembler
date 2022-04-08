const exercise07 = require('../07-exercise');

describe('07-exercise', () => {
    test('create a switch statement from scratch that executes only one case', () => {
        expect(exercise07()).toBe('no number');
        expect(exercise07(1)).toBe('one');
        expect(exercise07(2)).toBe('two');
        expect(exercise07(3)).toBe('three');
    });
});
