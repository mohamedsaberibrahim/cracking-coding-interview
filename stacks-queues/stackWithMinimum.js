const Stack = require('./Stack');

class StackWithMinimum extends Stack {
    constructor() {
        super();
        this.stack = new Stack();
    }

    add(value) {
        if (value <= this.min()) {
            this.stack.add(value);
        }
        super.add(value);
    }

    remove() {
        const value = super.remove();
        if(value == this.min()) {
            this.stack.remove();
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
