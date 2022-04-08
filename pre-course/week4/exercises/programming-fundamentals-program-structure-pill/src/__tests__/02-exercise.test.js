const exercise02 = require('../02-exercise');

describe('02-exercise', () => {
    test('create variable names in snake_case, camelCase, PascalCase and "$" + "_" + camelCase', () => {
        expect(exercise02()).toMatchObject([
            'my_first_variable',
            'myFirstVariable',
            'MyFirstVariable',
            '$_myFirstVariable',
        ]);
    });
});
