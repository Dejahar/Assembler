const exercise10 = require('../10-exercise');

describe('10-exercise', () => {
    test('use `array.push()` to add a new employee to the `employees` array', () => {
        expect(exercise10().employees).toMatchObject([
            'Mark',
            'John',
            'Chris',
            'Alex',
        ]);
    });
});
