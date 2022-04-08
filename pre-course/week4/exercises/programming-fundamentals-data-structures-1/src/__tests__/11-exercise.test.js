const exercise11 = require('../11-exercise');

describe('11-exercise', () => {
    test('create a new object and return it', () => {
        expect(exercise11()).toMatchObject({
            name: 'Barcelona',
            districtsCount: 10,
            districts: expect.arrayContaining([
                'Ciutat Vella',
                'Eixample',
                'Sants-Montjuic',
                'Les Corts',
            ]),
        });
    });
});
