// What is the output?
function * generator (z) {
  console.log(z)
  z++
  const a = yield z + 1
  console.log('Inside generator: ' + a)
  const b = yield (a + ' world!')
  console.log('Inside generator: ' + b)
  yield b * 2
}

const g = generator(999)
console.log(g.next().value)
console.log(g.next('hello', 'second ignored parameter').value)
console.log(g.next(10).value)
