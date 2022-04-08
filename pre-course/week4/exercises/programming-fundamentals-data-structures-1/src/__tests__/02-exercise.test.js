const exercise02 = require('../02-exercise');

describe('02-exercise', () => {
    test('return the full name of the person parameter', () => {
        const p1 = { firstname: 'Mark', lastname: 'Peter' };
        const p2 = { firstname: 'Ana', lastname: 'Clark' };
        const p3 = { firstname: 'John', lastname: 'Spence' };

        expect(exercise02(p1)).toEqual(
            expect.stringMatching(
                new RegExp(`my name is ${p1.firstname} ${p1.lastname}`, 'i'),
            ),
        );
        expect(exercise02(p2)).toEqual(
            expect.stringMatching(
                new RegExp(`my name is ${p2.firstname} ${p2.lastname}`, 'i'),
            ),
        );
        expect(exercise02(p3)).toEqual(
            expect.stringMatching(
                new RegExp(`my name is ${p3.firstname} ${p3.lastname}`, 'i'),
            ),
        );
    });
});
