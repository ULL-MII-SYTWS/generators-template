#!/usr/bin/env node
import { Group } from './Group.mjs'

const group = Group.from([10, 20])
// group.write();

console.log(group.has(10))
console.log(group.has(30))

group.add(10)
group.delete(10)
console.log(group.has(10))

for (const value of Group.from(['a', 'b', 'c'])) {
  console.log(value)
}
