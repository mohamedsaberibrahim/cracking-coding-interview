/**
 * QueueByTwoStacks
 *
 * 
 */

const Stack = require('./Stack');

class QueueByTwoStacks {
    constructor() {
        this.stackNewest = new Stack();
        this.stackOldest = new Stack();
    }

    enqueue(number) {
        this.stackNewest.add(number);
    }

    dequeue() {
        this._shiftStacks();
        return this.stackOldest.remove();
    }

    front() {
        this._shiftStacks();
        return this.stackOldest.peek();
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return this.stackNewest.size() + this.stackOldest.size();
    }

    _shiftStacks() {
        if(this.stackOldest.isEmpty()) {
            while(!this.stackNewest.isEmpty()) {
                this.stackOldest.add(this.stackNewest.remove());
            }
        }
    }
}

module.exports = QueueByTwoStacks;