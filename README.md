# Boolean evaluator

Package for transforming a string with logical operators into the result of an expression.

## Installation

```sh
$ npm install @bxr1ng-os/boolean-evaluator
```

## Usage

```typescript
import Evaluate from "@bxr1ng-os/boolean-evaluator";

const string = "!(true || false) && true";

const result = Evaluate(string);

console.log(result); // false
```

## Available operators and values

`true`, `false`, `&&`, `||`, `!`, `(`, `)`

## License

[ISC](LICENSE.md)

## Author
[Danya Voshchuk](https://github.com/bxr1nG) ([vochshukdaniil@gmail.com](mailto:vochshukdaniil@gmail.com))
