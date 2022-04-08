const exercise21 = require('../21-exercise');

describe('21-exercise', () => {
    test('return an array of emails that are 22 characters or longer', () => {
        expect(exercise21()).toEqual(
            expect.arrayContaining([
                'qlearned2@imageshack.us',
                'gkelner5@squarespace.com',
                'fdominiak6@netvibes.com',
                'wmeritonb@arstechnica.com',
                'krobertsend@4shared.com',
                'jcodringtong@photobucket.com',
                'fmuckleyi@washington.edu',
            ]),
        );
    });
});
