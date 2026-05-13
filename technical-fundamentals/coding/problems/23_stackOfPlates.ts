// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
    stacks: T[][]
    capacity: number
    constructor(capacity: number) {
        this.stacks = [[]]
        this.capacity = capacity
    }

    push(value: T): void {
        if (this.stacks[this.stacks.length - 1].length == this.capacity) {
            this.stacks.push([value])
        } else {
            this.stacks[this.stacks.length - 1].push(value)
        }
    }

    pop(): T | undefined {
        if (this.stacks.length === 0) {
            return undefined;
        }
        const topStack = this.stacks[this.stacks.length - 1];
        const value = topStack.pop();
        if (topStack.length === 0 && this.stacks.length > 1) {
            this.stacks.pop();
        }
        return value;
    }
}

