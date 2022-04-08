const exercise09 = require('../09-exercise');

describe('09-exercise', () => {
    test("use a for loop to store in the 'args' array the arguments of the function", () => {
        let args1 = exercise09('hello', 'world');
        let args2 = exercise09(20, 'test-str');

        expect(args1).toMatchObject(['hello', 'world']);
        expect(args2).toMatchObject([20, 'test-str']);
    });
});
