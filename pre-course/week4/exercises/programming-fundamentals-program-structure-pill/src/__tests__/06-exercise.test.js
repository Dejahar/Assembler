const exercise06 = require('../06-exercise');

describe('06-exercise', () => {
    test('fix the use of global variables', () => {
        expect(exercise06.exercise06Solution()).toBe('hello-world');

        expect(() => {
            exercise06.exercise06Test();
        }).toThrow();
    });
});
