const exercise13 = require('../13-exercise');

describe('13-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => logSpy.mockRestore());

    test('create a do while loop to console.log 0 to 4 and 16 to 20', () => {
        exercise13();

        expect(logSpy).toHaveBeenCalledTimes(10);

        expect(logSpy).toHaveBeenCalledWith(0);
        expect(logSpy).toHaveBeenCalledWith(1);
        expect(logSpy).toHaveBeenCalledWith(2);
        expect(logSpy).toHaveBeenCalledWith(3);
        expect(logSpy).toHaveBeenCalledWith(4);
        expect(logSpy).toHaveBeenCalledWith(16);
        expect(logSpy).toHaveBeenCalledWith(17);
        expect(logSpy).toHaveBeenCalledWith(18);
        expect(logSpy).toHaveBeenCalledWith(19);
        expect(logSpy).toHaveBeenCalledWith(20);
    });
});
