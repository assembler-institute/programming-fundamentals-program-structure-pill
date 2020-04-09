const exercise16 = require('../16-exercise');

describe('16-exercise', () => {
    let logSpy = jest.spyOn(console, 'log');

    afterAll(() => logSpy.mockRestore());

    test('console.log the characters in the str variable with for in', () => {
        exercise16();

        expect(logSpy).toHaveBeenCalledWith('Today is Monday');
        expect(logSpy).toHaveBeenCalledWith('Today is Tuesday');
        expect(logSpy).toHaveBeenCalledWith('Today is Wednesday');
        expect(logSpy).toHaveBeenCalledWith('Today is Thursday');
        expect(logSpy).toHaveBeenCalledWith('Today is Friday');
        expect(logSpy).toHaveBeenCalledWith('Today is Saturday');
        expect(logSpy).toHaveBeenCalledWith('Today is Sunday');
    });
});
