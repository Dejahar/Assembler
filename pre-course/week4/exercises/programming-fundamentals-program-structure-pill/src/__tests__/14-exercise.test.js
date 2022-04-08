const exercise14 = require('../14-exercise');

describe('14-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => logSpy.mockRestore());

    test('console.log each of the characters in the str variable with for of', () => {
        exercise14();

        expect(logSpy).toHaveBeenCalledWith('h');
        expect(logSpy).toHaveBeenCalledWith('e');
        expect(logSpy).toHaveBeenCalledWith('l');
        expect(logSpy).toHaveBeenCalledWith('l');
        expect(logSpy).toHaveBeenCalledWith('o');
        expect(logSpy).toHaveBeenCalledWith('-');
        expect(logSpy).toHaveBeenCalledWith('w');
        expect(logSpy).toHaveBeenCalledWith('o');
        expect(logSpy).toHaveBeenCalledWith('r');
        expect(logSpy).toHaveBeenCalledWith('l');
        expect(logSpy).toHaveBeenCalledWith('d');
    });
});
