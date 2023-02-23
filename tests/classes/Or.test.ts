import Value from "../../src/classes/Value";
import Or from "../../src/classes/Or";

describe("And class", () => {
    const operand1 = new Value(true);
    const operand2 = new Value(false);
    const or = new Or(operand1, operand2);

    test("should have two operands properties with expected values", () => {
        expect(or.operand1).toBe(operand1);
        expect(or.operand2).toBe(operand2);
    });

    test('should have "evaluate" method that returns True', () => {
        expect(or.evaluate()).toBe(true);
    });
});
