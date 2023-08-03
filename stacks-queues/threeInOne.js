class FixedMultiStack {
    constructor(stackCapacity) {
        this.numberOfStacks = 3;
        this.stackCapacity = stackCapacity;
        this.values = new Array(this.numberOfStacks * this.stackCapacity);
        this.sizes = new Array(this.numberOfStacks).fill(0);
    }

    push(stackNum, value) {
        if(this.isFull(stackNum)) {
        throw new Error(`Stack ${stackNum} is full`);
        }
        this.sizes[stackNum]++;
        this.values[this.indexOfTop(stackNum)] = value;
    }

    pop(stackNum) {
        if (this.isEmpty(stackNum)) {
        throw new Error(`Stack ${stackNum} is empty`);
        }
        const value = this.values[this.indexOfTop(stackNum)];
        this.values[this.indexOfTop(stackNum)] = 0;
        this.sizes[stackNum]--;
        return value;
    }

    peek(stackNum) {
        return this.values[this.indexOfTop(stackNum)];
    }

    isEmpty(stackNum) {
        return this.sizes[stackNum] === 0;
    }

    isFull(stackNum) {
        return this.sizes[stackNum] === this.stackCapacity;
    }

    size(stackNum) {
        return this.sizes[stackNum];
    }

    indexOfTop(stackNum) {
        const offset = stackNum * this.stackCapacity;
        const size = this.sizes[stackNum];
        return offset + size - 1;
    }
};

function main() {
    const stack = new FixedMultiStack(4);
    stack.push(0, 1);
    stack.push(0, 2);
    stack.push(0, 3);
    stack.push(0, 3);
    stack.push(1, 3);
    stack.push(1, 3);
    stack.push(1, 5);
    stack.push(2, 8);
    stack.push(2, 8);
    stack.push(2, 8);
    stack.push(2, 8);
    console.log(stack.peek(0)); // 3
    console.log(stack.peek(1)); // 5 
    console.log(stack.peek(2)); // 8
    console.log(stack.isFull(2)); // true
    console.log(stack.isEmpty(0)); // false
    console.log(stack.size(1)); // 3
    console.log(stack.pop(1)); // 5 
    console.log(stack.size(1)); // 2
}

main();
