class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        this.items.push(element);
    }

    remove() {
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

function main() {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    console.log(`isEmpty: ${stack.isEmpty()}`);
    console.log(`peek: ${stack.peek()}`);
    console.log(`remove: ${stack.remove()}`);
    console.log(`peek: ${stack.peek()}`);
}

main();
