const Stack = require('./Stack');

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stacks = new Array();
  }

  push(value) {
    const lastStack = this._getLastStack();
    if (lastStack != null && !lastStack.isFull()) {
      lastStack.push(value);
    } else {
      if (this.stacks.length === this.capacity) throw new Error(`All stacks are full`);
      const stack = new Stack(this.capacity);
      stack.push(value);
      this.stacks.push(stack);
    }
  }

  pop() {
    const lastStack = this._getLastStack();
    let value;
    if (lastStack != null && !lastStack.isEmpty()) {
      value = lastStack.pop();
    }
    if (lastStack.size() == 0) this.stacks.slice(-1);
    return value;
  }

  peek() {
    const lastStack = this._getLastStack();
    if (lastStack != null && !lastStack.isEmpty()) {
      return lastStack.peek();
    }
  }
  
  _getLastStack() {
    if (this.stacks.length == 0) return null;
    return this.stacks[this.stacks.length - 1];
  }
  
  isEmpty() {
    const lastStack = this._getLastStack();
    if (lastStack == null || lastStack.isEmpty()) return true;
    return false;
  }
  
  popAt(index) {
    return this.leftShift(index, true);
  }
  
  leftShift(index, removeTop) {
    const stack = this.stacks[index];
    let removedItem;
    if (removeTop) removedItem = stack.pop();
    else removedItem = stack.peek();
    if (stack.isEmpty()) {
      this.stacks.splice(index, 1);
    } else if(this.stacks.length > index + 1) {
      const value = this.leftShift(index + 1, false);
      stack.push(value);
    }
    return removedItem;
  }
}
  
function main() {
  const setOfStacks = new SetOfStacks(2);
  setOfStacks.push(1);
  setOfStacks.push(2);
  setOfStacks.push(3);
  setOfStacks.push(4);
  // setOfStacks.push(5); // All stacks are full
  console.log(setOfStacks.peek()); // 4
  console.log(setOfStacks.popAt(1)); // 4
  console.log(setOfStacks.pop()); // 3
}

main();
