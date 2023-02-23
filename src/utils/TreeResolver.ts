import type Operand from "../types/Operand";
import type Value from "../classes/Value";
import type And from "../classes/And";
import type Or from "../classes/Or";
import type Not from "../classes/Not";

function TreeResolver(node: Operand, values: Record<string, boolean>): boolean {
    function Inner(node: Operand): boolean {
        if (node.type === "value") {
            return values[(node as Value).value];
        }
        if (node.type === "and") {
            return (
                Inner((node as And).operand1) && Inner((node as And).operand2)
            );
        }
        if (node.type === "or") {
            return Inner((node as Or).operand1) || Inner((node as Or).operand2);
        }
        if (node.type === "not") {
            return !Inner((node as Not).operand);
        }
        throw new Error("Invalid input token occurred");
    }

    return Inner(node);
}

export default TreeResolver;
