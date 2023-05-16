function InputParser(input: string, operands: Array<string>): Array<string> {
    const operators = ["&&", "||", "!", "(", ")"];
    const entries = [...operands, ...operators];

    input = input.replace(/\s/g, "");

    const inputEntries: Array<string> = [];

    while (input.length > 0) {
        const newEntry = entries.filter((entry) => input.startsWith(entry));

        if (newEntry.length < 1) {
            throw new Error("Syntax error in the input string");
        }

        inputEntries.push(newEntry[0] as string);
        input = input.replace(newEntry[0] as string, "");
    }

    let bracketsCounter = 0;

    inputEntries.forEach((entry) => {
        if (entry === "(") {
            bracketsCounter++;
        }
        if (entry === ")") {
            bracketsCounter--;
            if (bracketsCounter < 0) {
                throw new Error(
                    "Unexpected order of brackets in the input string"
                );
            }
        }
    });

    if (bracketsCounter !== 0) {
        throw new Error("Incorrect number of brackets in the input string");
    }

    // ...!
    if (
        inputEntries.length > 0 &&
        ["&&", "||", "!"].includes(
            inputEntries[inputEntries.length - 1] as string
        )
    ) {
        throw new Error("Unexpected operator in the input string");
    }
    // &&...
    if (
        inputEntries.length > 0 &&
        ["&&", "||"].includes(inputEntries[0] as string)
    ) {
        throw new Error("Unexpected operator in the input string");
    }

    inputEntries.forEach((entry, index) => {
        // true false
        if (
            operands.includes(entry) &&
            index + 1 < inputEntries.length &&
            operands.includes(inputEntries[index + 1] as string)
        ) {
            throw new Error("Unexpected operand in the input string");
        }
        // ()
        if (
            entry === "(" &&
            index + 1 < inputEntries.length &&
            inputEntries[index + 1] === ")"
        ) {
            throw new Error("Unexpected order of brackets in the input string");
        }
        // true (...
        if (
            entry === "(" &&
            index - 1 >= 0 &&
            [...operands, "&&", "||"].includes(
                inputEntries[index - 1] as string
            )
        ) {
            throw new Error("Unexpected operand in the input string");
        }
        // ...) true
        if (
            entry === ")" &&
            index + 1 < inputEntries.length &&
            [...operands, "!"].includes(inputEntries[index + 1] as string)
        ) {
            throw new Error("Unexpected operand in the input string");
        }

        const andor = ["&&", "||"];

        // ! &&
        if (
            entry === "!" &&
            index + 1 < inputEntries.length &&
            andor.includes(inputEntries[index + 1] as string)
        ) {
            throw new Error("Unexpected operator in the input string");
        }
        // && ||
        if (
            andor.includes(entry) &&
            index + 1 < inputEntries.length &&
            andor.includes(inputEntries[index + 1] as string)
        ) {
            throw new Error("Unexpected operator in the input string");
        }
    });

    return inputEntries;
}

export default InputParser;
