import Value from "../../src/classes/Value";

describe("Value class", () => {
    const value = new Value(true);

    test('should have "value" property with True value', () => {
        expect(value.value).toBe(true);
    });

    test('should have "evaluate" method that returns True', () => {
        expect(value.evaluate()).toBe(true);
    });
});
