/**
 * StackSorter
 *
 * 
 */
const Stack = require('./Stack');

class StackSorter {
    constructor() {
        this.helperStack = new Stack();
    }

    sort(stack) {
        while(!stack.isEmpty()) {
            const topOfStack = stack.remove();
            while(this.helperStack.peek() > topOfStack) {
                stack.add(this.helperStack.remove());
            }
            this.helperStack.add(topOfStack);
        }
        // Copy the elements to the original stack
        while(!this.helperStack.isEmpty()) {
            stack.add(this.helperStack.remove());
        }
    }
}
module.exports = StackSorter;