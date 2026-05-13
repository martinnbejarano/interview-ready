// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
    stack: number[][]
    constructor() {
        this.stack = new Array()
    }

    push(value: number): void {
        if (this.stack.length == 0) {
            this.stack.push([value, value])
        } else {
            this.stack.push([value, Math.min(value, this.stack[this.stack.length - 1][1])])
        }
    }

    pop(): number | undefined {
        const top = this.stack.pop();
        return top?.[0];
    } 

    min(): number | undefined {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1][1]
        }
        return undefined
    }
}
