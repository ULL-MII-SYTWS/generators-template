class Group {
  constructor () {
    this.items = []
  }

  // Write your code here

  // Generator
  * [Symbol.iterator] () {
    for (let index = 0; index < this.items.length; index++) {
      yield this.items[index]
    }
  }
}

export { Group }
