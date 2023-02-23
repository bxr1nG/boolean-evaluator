import InputParser from "./utils/InputParser";
import PostfixConverter from "./utils/PostfixConverter";
import TreeCreator from "./utils/TreeCreator";
import TreeResolver from "./utils/TreeResolver";

function Evaluate(string: string): boolean {
    const values = { true: true, false: false };
    const operands = Object.keys(values).sort((a, b) => b.length - a.length);

    const tokens = InputParser(string, operands);
    const postfix = PostfixConverter(tokens, operands);
    const tree = TreeCreator(postfix, operands);
    const result = TreeResolver(tree, values);

    return result;
}

export default Evaluate;
