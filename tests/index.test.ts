import Evaluate from "../src";

describe("Evaluate function", () => {
    test('should return True from "true || false"', () => {
        expect(Evaluate("true || false")).toBe(true);
    });

    test('should return False from "true && false"', () => {
        expect(Evaluate("true && false")).toBe(false);
    });

    test('should return True from "(true)"', () => {
        expect(Evaluate("(true)")).toBe(true);
    });

    test('should return True from "!!true"', () => {
        expect(Evaluate("!!true")).toBe(true);
    });

    test('should return True from "(true || false) && true"', () => {
        expect(Evaluate("(true || false) && true")).toBe(true);
    });
});
