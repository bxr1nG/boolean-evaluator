function InputParser(input: string, operands: Array<string>): Array<string> {
    const operators = ["&&", "||", "!", "(", ")"];
    const entries = [...operands, ...operators];

    input = input.replace(/\s/g, "");

    const inputEntries = [];

    while (input.length > 0) {
        const newEntry = entries.filter((entry) => input.startsWith(entry));

        if (newEntry.length !== 1) {
            throw new Error("Syntax error in the input string");
        }

        inputEntries.push(newEntry[0]);
        input = input.replace(newEntry[0], "");
    }

    let bracketsCounter = 0;

    inputEntries.forEach((entry) => {
        if (entry === "(") {
            bracketsCounter++;
        }
        if (entry === ")") {
            bracketsCounter--;
        }
    });

    if (bracketsCounter !== 0) {
        throw new Error("Incorrect number of brackets in the input string");
    }

    return inputEntries;
}

export default InputParser;
