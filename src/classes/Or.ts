import type Operand from "../types/Operand";

class Or {
    type: string;
    operand1: Operand;
    operand2: Operand;

    constructor(operand1: Operand, operand2: Operand) {
        this.type = "or";
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
}

export default Or;