const op = require('./operon')
    , adopts = require('./adopts')

const count = op('count')

Object [adopts] (count) (_ => 1)
Array  [adopts] (count) (_ => _.length)
String [adopts] (count) (_ => _.length)

const assert = require('assert')
assert.equal(
    [1, 'hello', 2, 3][count](),
    4,
    'Operons can be called as methods')
assert.equal(
    count([1, 2, 3]),
    [1, 2, 3][count](),
    'Operons are equivalent when called as free functions and methods'
)
assert.equal('hello' [count] (), 'hello'.length)
