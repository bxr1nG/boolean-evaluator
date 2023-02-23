import Value from "../../src/classes/Value";
import Not from "../../src/classes/Not";

describe("Not class", () => {
    const value = new Value(true);
    const not = new Not(value);

    test('should have "operand" property with expected value', () => {
        expect(not.operand).toEqual(value);
    });

    test('should have "evaluate" method that returns False', () => {
        expect(not.evaluate()).toBe(false);
    });
});
