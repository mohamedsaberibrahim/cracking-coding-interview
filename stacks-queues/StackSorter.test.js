/**
 * StackSorter
 *
 * 
 */

const Stack = require('./Stack');
const StackSorter = require('./StackSorter');

describe('StackSorter', () => {
  test('sort should return sorted stack', () => {
    const stack = new Stack();
    stack.add(2);
    stack.add(1);
    stack.add(4);
    stack.add(8);
    stack.add(7);
    stack.add(3);
    stack.add(8);
    stack.add(0);
    const stackSorter = new StackSorter();
    stackSorter.sort(stack);
    expect(stack.remove()).toBe(0);
    expect(stack.remove()).toBe(1);
    expect(stack.remove()).toBe(2);
    expect(stack.remove()).toBe(3);
    expect(stack.remove()).toBe(4);
  });
});