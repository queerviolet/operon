const adopts = module.exports = require('./operon')('adopts')

const {toPrimitive} = Symbol
Function.prototype [adopts] = function(op) {
  if (!this.prototype)
    throw new Error(this, 'has no prototype')
  
  if (!(toPrimitive in op) || typeof op[toPrimitive] !== 'function')
    throw new Error(op, 'is not an operator')
  const symbol = op[toPrimitive]()
  return implementation => {
    this.prototype[symbol] = function(...args) {
      return implementation(this, ...args)
    }
  }
}