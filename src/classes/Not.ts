import type Operand from "../types/Operand";

class Not {
    operand: Operand;

    constructor(operand: Operand) {
        this.operand = operand;
    }

    evaluate(): boolean {
        return !this.operand.evaluate();
    }
}

export default Not;
