class Value {
    type: string;
    value: boolean;

    constructor(value: boolean) {
        this.type = "value";
        this.value = value;
    }

    evaluate(): boolean {
        return this.value;
    }
}

export default Value;
