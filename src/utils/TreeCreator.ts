import type Operand from "../types/Operand";

import Value from "../classes/Value";
import And from "../classes/And";
import Or from "../classes/Or";
import Not from "../classes/Not";

function TreeCreator(
    postfix: Array<string>,
    operands: Array<string>,
    values: Record<string, boolean>
): Operand {
    const stack: Array<Operand> = [];

    postfix.forEach((token) => {
        if (operands.includes(token)) {
            stack.push(new Value(values[token] as boolean));
        }
        if (token === "&&") {
            const operand = new And(
                stack.pop() as Operand,
                stack.pop() as Operand
            );
            stack.push(operand);
        }
        if (token === "||") {
            const operand = new Or(
                stack.pop() as Operand,
                stack.pop() as Operand
            );
            stack.push(operand);
        }
        if (token === "!") {
            const operand = new Not(stack.pop() as Operand);
            stack.push(operand);
        }
    });

    if (stack.length !== 1) {
        throw new Error("Incorrect number of operands in the input string");
    }

    return stack[0] as Operand;
}

export default TreeCreator;
