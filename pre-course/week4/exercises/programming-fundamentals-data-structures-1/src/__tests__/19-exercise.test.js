const exercise19 = require('../19-exercise');

describe('19-exercise', () => {
    test('create an array of student grades', () => {
        expect(exercise19()).toEqual(expect.arrayContaining([8, 9, 5, 6]));
    });
});
