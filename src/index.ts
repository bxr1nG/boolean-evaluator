import InputParser from "./utils/InputParser";
import PostfixConverter from "./utils/PostfixConverter";
import TreeCreator from "./utils/TreeCreator";

function Evaluate(
    string: string,
    newValues?: Record<string, boolean>
): boolean {
    const values = { ...newValues, true: true, false: false };
    const operands = Object.keys(values).sort((a, b) => b.length - a.length);

    const tokens = InputParser(string, operands);
    const postfix = PostfixConverter(tokens, operands);
    const tree = TreeCreator(postfix, operands, values);

    return tree.evaluate();
}

export default Evaluate;
