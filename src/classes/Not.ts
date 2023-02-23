import type Operand from "../types/Operand";

class Not {
    type: string;
    operand: Operand;

    constructor(operand: Operand) {
        this.type = "not";
        this.operand = operand;
    }

    evaluate(): boolean {
        return !this.operand.evaluate();
    }
}

export default Not;
