// What is the output?
function * foo () {
  yield 123
}

function * bar () {
  return yield 123
}

const f = foo()
const b = bar()

console.log(
  f.next(),
  f.next())

console.log(
  b.next(),
  b.next()
)
