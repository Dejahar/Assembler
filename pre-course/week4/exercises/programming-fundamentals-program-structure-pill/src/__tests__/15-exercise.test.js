const exercise15 = require('../15-exercise');

describe('15-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => logSpy.mockRestore());

    test('console.log the characters in the str variable with for in', () => {
        exercise15();

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
