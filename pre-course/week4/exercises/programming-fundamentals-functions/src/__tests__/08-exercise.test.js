const exercise08 = require('../08-exercise');

describe('08-exercise', () => {
    test('execute the "callback" parameter function with each of the elements in the array', () => {
        let cb = jest.fn();

        exercise08(cb);

        expect(cb).toHaveBeenCalledTimes(5);
        expect(cb.mock.calls[0][0]).toBe(1);
        expect(cb.mock.calls[1][0]).toBe(2);
        expect(cb.mock.calls[2][0]).toBe(3);
        expect(cb.mock.calls[3][0]).toBe(4);
        expect(cb.mock.calls[4][0]).toBe(5);
    });
});
