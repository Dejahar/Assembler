const exercise09 = require('../09-exercise');

describe('09-exercise', () => {
    test('use `array.map()` to create a new array with the lengths of the city names', () => {
        let { cities, nameLengths } = exercise09();

        expect(cities).toMatchObject([
            'Barcelona',
            'Sevilla',
            'Tarragona',
            'Berlin',
            'Paris',
        ]);

        expect(nameLengths).toMatchObject([
            'long name',
            'short name',
            'long name',
            'short name',
            'short name',
        ]);
    });
});
