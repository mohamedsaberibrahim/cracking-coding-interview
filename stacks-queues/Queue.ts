/**
 * Queue
 *
 * 
 */

export class Queue {
    list: any[];
    constructor() {
        this.list = [];
    }

    enqueue(number) {
        this.list.push(number);
        return;
    }

    dequeue() {
        return !this.isEmpty() ? this.list.shift() : null;
    }

    front() {
        return !this.isEmpty() ? this.list[0] : null;
    }

    isEmpty() {
        return this.size() == 0;
    }

    size() {
        return this.list.length;
    }
}