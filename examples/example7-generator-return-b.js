// What is the output?
function * foo () {
  yield 123
}

function * bar () {
  return yield 123
}

const f = foo()
const b = bar()

console.log('f')
console.log(f.next())
console.log(f.next(2)) // the difference with the example7-generator-return.js is that we are passing a value to the next() method

console.log('b')
console.log(b.next())
console.log(b.next(2)) // the difference with the example7-generator-return.js is that we are passing a value to the next() method
