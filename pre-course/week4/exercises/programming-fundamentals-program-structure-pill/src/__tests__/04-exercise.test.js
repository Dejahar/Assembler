const exercise04 = require('../04-exercise');

describe('04-exercise', () => {
    test('correct the variable name so that it doesn’t use a JavaScript reserved name', () => {
        expect(() => {
            exercise04();
        }).not.toThrow();
    });
});
