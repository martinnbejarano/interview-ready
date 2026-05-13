// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
    left: Array<T>
    right: Array<T>
    constructor() {
        this.right = new Array()
        this.left = new Array()
    }

    enqueue(value: T): void {
        this.left.push(value)
    }

    dequeue(): T | undefined {
        if (this.right.length === 0) {
            while (this.left.length > 0) {
                this.right.push(this.left.pop()!)
            }
        } 
        return this.right.pop()
        
    }

    peek(): T | undefined {
        if (this.right.length === 0) {
            while (this.left.length > 0) {
              this.right.push(this.left.pop()!)
            }
          }
      
          return this.right[this.right.length - 1]
    }

    isEmpty(): boolean {
        return this.left.length == 0 && this.right.length == 0
    }
}
