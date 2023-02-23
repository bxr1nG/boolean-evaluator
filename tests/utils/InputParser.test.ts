import InputParser from "../../src/utils/InputParser";

const operands = ["true", "false"];

describe("InputParser function", () => {
    test("should return empty array", () => {
        expect(InputParser("", operands)).toEqual([]);
    });

    test('should return ["true"]', () => {
        expect(InputParser("    true      ", operands)).toEqual(["true"]);
    });

    test('should return ["true", "&&", "false"]', () => {
        expect(InputParser("true && false", operands)).toEqual([
            "true",
            "&&",
            "false"
        ]);
    });

    test('should return ["(", "true", "||", "false", ")"]', () => {
        expect(InputParser("(true || false)", operands)).toEqual([
            "(",
            "true",
            "||",
            "false",
            ")"
        ]);
    });

    test('should return ["(", "true", ")"]', () => {
        expect(InputParser("(true)", operands)).toEqual(["(", "true", ")"]);
    });

    test('should return ["!", "true"]', () => {
        expect(InputParser("!true", operands)).toEqual(["!", "true"]);
    });

    test('should throw on "abc"', () => {
        const func = () => {
            InputParser("abc", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "("', () => {
        const func = () => {
            InputParser("(", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "()"', () => {
        const func = () => {
            InputParser("()", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on ")("', () => {
        const func = () => {
            InputParser(")(", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true false"', () => {
        const func = () => {
            InputParser("true false", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true (false)"', () => {
        const func = () => {
            InputParser("true (false)", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "|| (false)"', () => {
        const func = () => {
            InputParser("|| (false)", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "(true) &&"', () => {
        const func = () => {
            InputParser("(true) &&", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "(true) false"', () => {
        const func = () => {
            InputParser("(true) false", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true!"', () => {
        const func = () => {
            InputParser("true!", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true && || false"', () => {
        const func = () => {
            InputParser("true && || false", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "|| false"', () => {
        const func = () => {
            InputParser("|| false", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true &&"', () => {
        const func = () => {
            InputParser("true &&", operands);
        };

        expect(func).toThrow(Error);
    });

    test('should throw on "true ! && false"', () => {
        const func = () => {
            InputParser("true ! && false", operands);
        };

        expect(func).toThrow(Error);
    });
});
