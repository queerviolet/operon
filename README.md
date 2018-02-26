# What's an operon?

An operon is a free operation that can types can adopt.

Think of them as functors, or single-function protocols.

```sh
npm i --save operon
```

This module exports `operon`, which defines new operons,
and `adopt`, an operon that operates on constructors,
mutating them to define an operation on their prototype.

Under the hood, operons use Symbols to safely extend arbitrary prototypes.

## Example

```js
const {operon, adopts} = require('operon')

const count = op('count')

Object [adopts] (count) (_ => 1)
Array  [adopts] (count) (_ => _.length)
String [adopts] (count) (_ => _.length)

console.log(count('hello'))       // 5
console.log('hello'[count]())     // equivalently, 5
console.log(count({x: 10}))       // 1
console.log([1, 20, 30][count]()) // 3
```