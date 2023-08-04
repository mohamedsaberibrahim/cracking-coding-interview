const Stack = require('./Stack');

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
