const exercise09 = require('../09-exercise');

describe('09-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => logSpy.mockRestore());

    test('create a for loop to console.log the numbers from 0 to 9', () => {
        exercise09();

        expect(logSpy).toHaveBeenCalledTimes(10);

        expect(logSpy).toHaveBeenCalledWith(0);
        expect(logSpy).toHaveBeenCalledWith(1);
        expect(logSpy).toHaveBeenCalledWith(2);
        expect(logSpy).toHaveBeenCalledWith(3);
        expect(logSpy).toHaveBeenCalledWith(4);
        expect(logSpy).toHaveBeenCalledWith(5);
        expect(logSpy).toHaveBeenCalledWith(6);
        expect(logSpy).toHaveBeenCalledWith(7);
        expect(logSpy).toHaveBeenCalledWith(8);
        expect(logSpy).toHaveBeenCalledWith(9);
    });
});
