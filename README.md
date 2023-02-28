# Boolean evaluator

[![Known Vulnerabilities](https://snyk.io/test/github/bxr1nG/boolean-evaluator/badge.svg?style=flat-square)](https://snyk.io/test/github/bxr1nG/boolean-evaluator)
![NPM Downloads](https://img.shields.io/npm/dw/@bxr1ng-os/boolean-evaluator?style=flat-square)
![NPM License](https://img.shields.io/npm/l/@bxr1ng-os/boolean-evaluator?style=flat-square)
![npm](https://img.shields.io/npm/v/@bxr1ng-os/boolean-evaluator?style=flat-square)
[![Codecov](https://img.shields.io/codecov/c/github/bxr1nG/boolean-evaluator?style=flat-square)](https://app.codecov.io/gh/bxr1nG/boolean-evaluator)

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

You can also pass your variables to the function. Simply write your variables in a string, and pass in the second parameter an object with the values.

```typescript
import Evaluate from "@bxr1ng-os/boolean-evaluator";

const newValues = { "some-true-value": true, "some-false-value": false};
const string = "some-true-value || some-false-value";

const result = Evaluate(string, newValues);

console.log(result); // true
```

## Available operators and values

`&&`, `||`, `!`, `(`, `)`, `true`, `false`

> **NOTE:** Default values cannot be reassigned!

## License

[ISC](LICENSE.md)

## Author
[Danya Voshchuk](https://github.com/bxr1nG) ([vochshukdaniil@gmail.com](mailto:vochshukdaniil@gmail.com))
