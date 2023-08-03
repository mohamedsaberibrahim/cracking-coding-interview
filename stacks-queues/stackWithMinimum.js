class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size () {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

class StackWithMinimum extends Stack {
    constructor() {
        super();
        this.stack = new Stack();
    }

    push(value) {
        if (value <= this.min()) {
            this.stack.push(value);
        }
        super.push(value);
    }

    pop() {
        const value = super.pop();
        if(value == this.min()) {
            this.stack.pop();
        }
        return value;
    }

    min() {
        if(this.stack.isEmpty()) {
            return Number.MAX_VALUE;
        } else {
            return this.stack.peek();
        }
    }
}

module.exports = StackWithMinimum;
