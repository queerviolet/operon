const op = require('./operon')
    , adopts = require('./adopts')

const count = op('count')

Object [adopts] (count) (_ => 1)
Array  [adopts] (count) (({length}) => length)
String [adopts] (count) (_ => _.length)

console.log([1, 2, 3] [count] ())
console.log({} [count] ())
console.log('hello' [count] ())
