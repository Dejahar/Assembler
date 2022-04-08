const exercise03 = require('../03-exercise');

describe('03-exercise', () => {
    test('correct the variable names in the array', () => {
        expect(exercise03()).toMatchObject([
            'my_first_variable',
            'myFirstVariable',
            'MyFirstVariable',
            'my_first_variable',
        ]);
    });
});
