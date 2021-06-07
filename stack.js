class Stack {
  constructor () {
    this.top = -1
    this.items = {}
  }

  get peek () {
    return this.items[this.top]
  }

  push (value) {
    this.top++
    this.items[this.top] = value
  }

  pop () {
    const value = this.items[this.top]
    this.top--
    delete this.items[this.top]
    return value
  }
}

export default Stack
