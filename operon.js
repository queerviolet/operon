const {toPrimitive} = Symbol

module.exports = name => {
  const symbol = Symbol(name)
  function operon(target, ...args) {
    return target[operon](...args)
  }
  operon[toPrimitive] = () => symbol
  return operon
}
