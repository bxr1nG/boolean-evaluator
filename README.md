# Boolean evaluator

[![Known Vulnerabilities](https://snyk.io/test/github/bxr1nG/boolean-evaluator/badge.svg?style=flat-square)](https://snyk.io/test/github/bxr1nG/boolean-evaluator)
![NPM Downloads](https://img.shields.io/npm/dw/@bxr1ng-os/boolean-evaluator?style=flat-square)
![NPM License](https://img.shields.io/npm/l/@bxr1ng-os/boolean-evaluator?style=flat-square)
![npm](https://img.shields.io/npm/v/@bxr1ng-os/boolean-evaluator?style=flat-square)

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
