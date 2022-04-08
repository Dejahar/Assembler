const exercise03 = require('../03-exercise');

describe('03-exercise', () => {
    test('create a method on the person object to return the name', () => {
        const name1 = 'Ana';
        const name2 = 'Mark';

        expect(exercise03().logName(name1)).toEqual(
            expect.stringMatching(new RegExp(`I am ${name1}`, 'i')),
        );
        expect(exercise03().logName(name2)).toEqual(
            expect.stringMatching(new RegExp(`I am ${name2}`, 'i')),
        );
    });
});
