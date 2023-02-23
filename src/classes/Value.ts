class Value {
    value: boolean;

    constructor(value: boolean) {
        this.value = value;
    }

    evaluate(): boolean {
        return this.value;
    }
}

export default Value;
