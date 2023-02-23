import type Operand from "../types/Operand";

class And {
    type: string;
    operand1: Operand;
    operand2: Operand;

    constructor(operand1: Operand, operand2: Operand) {
        this.type = "and";
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
}

export default And;
