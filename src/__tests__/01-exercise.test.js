const variableNaming = require('../01-exercise');

describe('01-exercise', () => {
    test('creates a variable  with an uppercase first letter', () => {
        expect(() => {
            variableNaming();
        }).not.toThrow();
        expect(variableNaming().Myvar).toEqual(expect.any(String));
    });

    test('creates a variable with a lowercase first letter', () => {
        expect(() => {
            variableNaming();
        }).not.toThrow();
        expect(variableNaming().myvar).toEqual(expect.any(String));
    });

    test('variables have different values', () => {
        expect(() => {
            variableNaming();
        }).not.toThrow();
        expect(variableNaming().Myvar).not.toBe(variableNaming().myvar);
    });
});
