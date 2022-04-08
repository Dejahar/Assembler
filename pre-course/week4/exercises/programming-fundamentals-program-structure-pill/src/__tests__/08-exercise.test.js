const exercise08 = require('../08-exercise');

describe('08-exercise', () => {
    test('fix the switch statement to execute only one case', () => {
        expect(exercise08()).toBe('Day Not Found');
        expect(exercise08(1)).toBe('Monday');
        expect(exercise08(5)).toBe('Friday');
    });
});
