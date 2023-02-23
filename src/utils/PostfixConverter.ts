function PostfixConverter(
    tokens: Array<string>,
    operands: Array<string>
): Array<string> {
    const precedence = {
        "!": 3,
        "&&": 2,
        "||": 1
    };

    const output: Array<string> = [];
    const stack: Array<string> = [];

    tokens.forEach((token) => {
        if (operands.includes(token)) {
            output.push(token);
        }
        if (Object.keys(precedence).includes(token)) {
            while (
                stack.length > 0 &&
                stack[stack.length - 1] !== "(" &&
                precedence[token as keyof typeof precedence] <=
                    precedence[
                        stack[stack.length - 1] as keyof typeof precedence
                    ]
            ) {
                output.push(stack.pop() as string);
            }
            stack.push(token);
        }
        if (token === "(") {
            stack.push(token);
        }
        if (token === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                output.push(stack.pop() as string);
            }
            stack.pop();
        }
    });

    while (stack.length > 0) {
        output.push(stack.pop() as string);
    }

    return output;
}

export default PostfixConverter;
