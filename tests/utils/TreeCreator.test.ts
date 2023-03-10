import TreeCreator from "../../src/utils/TreeCreator";
import Value from "../../src/classes/Value";
import And from "../../src/classes/And";
import Or from "../../src/classes/Or";
import Not from "../../src/classes/Not";

const values = { true: true, false: false };
const operands = ["true", "false"];

describe("TreeCreator function", () => {
    test('should return tree for ["true"]', () => {
        const tree = new Value(true);
        expect(TreeCreator(["true"], operands, values)).toEqual(tree);
    });

    test('should return tree from ["true", "!"]', () => {
        const tree = new Not(new Value(true));
        expect(TreeCreator(["true", "!"], operands, values)).toEqual(tree);
    });

    test('should return tree from ["true", "!", "!"]', () => {
        const tree = new Not(new Not(new Value(true)));
        expect(TreeCreator(["true", "!", "!"], operands, values)).toEqual(tree);
    });

    test('should return tree from ["true", "false", "&&"]', () => {
        const tree = new And(new Value(false), new Value(true));
        expect(TreeCreator(["true", "false", "&&"], operands, values)).toEqual(
            tree
        );
    });

    test('should return tree from ["true", "false", "||"]', () => {
        const tree = new Or(new Value(false), new Value(true));
        expect(TreeCreator(["true", "false", "||"], operands, values)).toEqual(
            tree
        );
    });

    test('should return tree from ["some-true-value", "some-false-value", "||"]', () => {
        const tree = new Or(new Value(false), new Value(true));
        const customValues = {
            ...values,
            "some-true-value": true,
            "some-false-value": false
        };
        const customOperands = Object.keys(customValues).sort(
            (a, b) => b.length - a.length
        );

        expect(
            TreeCreator(
                ["some-true-value", "some-false-value", "||"],
                customOperands,
                customValues
            )
        ).toEqual(tree);
    });

    test('should throw from ["true", "some-defunct-value", "||"]', () => {
        const func = () => {
            TreeCreator(["true", "some-defunct-value", "||"], operands, values);
        };

        expect(func).toThrow(Error);
    });

    test('should throw from ["true", "true", "false", "||"]', () => {
        const func = () => {
            TreeCreator(["true", "true", "false", "||"], operands, values);
        };

        expect(func).toThrow(Error);
    });
});
