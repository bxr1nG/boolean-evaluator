import Value from "../../src/classes/Value";
import And from "../../src/classes/And";

describe("And class", () => {
    const operand1 = new Value(true);
    const operand2 = new Value(false);
    const and = new And(operand1, operand2);

    test("should have two operands properties with expected values", () => {
        expect(and.operand1).toBe(operand1);
        expect(and.operand2).toBe(operand2);
    });

    test('should have "evaluate" method that returns False', () => {
        expect(and.evaluate()).toBe(false);
    });
});
