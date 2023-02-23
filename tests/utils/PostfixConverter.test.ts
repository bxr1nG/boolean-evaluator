import PostfixConverter from "../../src/utils/PostfixConverter";

const operands = ["true", "false"];

describe("PostfixConverter function", () => {
    test('should return ["true", "false", "&&"]', () => {
        expect(PostfixConverter(["true", "&&", "false"], operands)).toEqual([
            "true",
            "false",
            "&&"
        ]);
    });

    test('should return ["true", "!", "!"]', () => {
        expect(PostfixConverter(["!", "!", "true"], operands)).toEqual([
            "true",
            "!",
            "!"
        ]);
    });

    test('should return ["true", "false", "||", "true", "&&"]', () => {
        expect(
            PostfixConverter(
                ["(", "true", "||", "false", ")", "&&", "true"],
                operands
            )
        ).toEqual(["true", "false", "||", "true", "&&"]);
    });

    test('should return ["true", "false", "||", "!", "true", "&&"]', () => {
        expect(
            PostfixConverter(
                ["!", "(", "true", "||", "false", ")", "&&", "true"],
                operands
            )
        ).toEqual(["true", "false", "||", "!", "true", "&&"]);
    });
});
