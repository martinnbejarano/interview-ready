// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
    stack: number[]
    temp: number[]
    constructor() {
        this.stack = []
        this.temp = []
    }

    push(value: number): void {
        while (
          this.stack.length > 0 &&
          this.stack[this.stack.length - 1] < value
        ) {
          this.temp.push(this.stack.pop()!)
        }
      
        this.stack.push(value)
      
        while (this.temp.length > 0) {
          this.stack.push(this.temp.pop()!)
        }
      }

    pop(): number | undefined {
        return this.stack.pop()
    }

    peek(): number | undefined {
        return this.stack[this.stack.length - 1]
    }

    isEmpty(): boolean {
        return this.stack.length == 0
    }
}
