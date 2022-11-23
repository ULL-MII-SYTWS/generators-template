// Section a = yield exp submits exp and receives the b of the next g.next(b)
// What is the output?
function * gen () {
  const returnedFromYield = yield 'foo'
  yield returnedFromYield
}

const g = gen()

console.log(g.next(1))
console.log(g.next(2))
