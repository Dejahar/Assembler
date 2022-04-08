const exercise22 = require('../22-exercise');

describe('22-exercise', () => {
    test('return an array non-duplicate city names', () => {
        expect(exercise22()).toEqual([
            'Barcelona',
            'Bucharest',
            'Madrid',
            'Lisbon',
            'Berlin',
            'Sevilla',
        ]);
    });
});
