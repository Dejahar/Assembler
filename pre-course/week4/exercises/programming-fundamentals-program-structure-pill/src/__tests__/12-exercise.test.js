const exercise12 = require('../12-exercise');

describe('12-exercise', () => {
    test('create a for in loop to save if the number was smaller, equal or larger than 10', () => {
        expect(exercise12()).toMatchObject([
            'was smaller',
            'was larger',
            'was smaller',
            'was equal',
            'was larger',
            'was equal',
            'was smaller',
            'was smaller',
            'was larger',
        ]);
    });
});
