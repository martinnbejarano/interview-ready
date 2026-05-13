// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
    private array: T[];
    stackLength: number
    stackTops: number[]

    constructor(arrayLength: number) {
        this.array = new Array(arrayLength * 3).fill(undefined)
        this.stackTops = [-3, -2, -1]
    }

    push(stackNum: number, value: T): void {
        if (stackNum > 2 || stackNum < 0){
            throw new Error("stackNum out of range")
        }


        const newIndex = this.stackTops[stackNum] + 3 

        if (newIndex > this.array.length - 1) {
            throw new Error("stack ran out of space")
        }

        this.array[newIndex] = value
        this.stackTops[stackNum] = newIndex
    }

    pop(stackNum: number): T | undefined {
        if (stackNum > 2 || stackNum < 0){
            throw new Error("stackNum out of range")
        }

        const topIndex = this.stackTops[stackNum]


        if (topIndex < 0) {
            return undefined
        }

        const value = this.array[topIndex]
        this.array[topIndex] = undefined as T
        this.stackTops[stackNum] -= 3
        return value

    }

    peek(stackNum: number): T | undefined {
        if (stackNum > 2 || stackNum < 0){
            throw new Error("stackNum out of range")
        }

        const topIndex = this.stackTops[stackNum]


        if (topIndex < 0) {
            return undefined
        }

        return this.array[topIndex]
    }
}

// [1, 2, 3]