/**
 * Stack
 *
 * 
 */

const Stack = require("./Stack");

describe('Stack', () => {
  test('Calling size should return actual size', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    expect(stack.size()).toBe(5);
  });

  test('Calling peek should return the recent element', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    expect(stack.peek()).toBe(5);
  });

  test('Calling remove should return remove the recent element', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    expect(stack.remove()).toBe(5);
  });

  test('Calling size after remove should return the actual size', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.add(4);
    stack.add(5);
    stack.remove();
    expect(stack.size()).toBe(4);
  });

  test('Calling isEmpty should return true', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.remove();
    stack.remove();
    stack.remove();
    expect(stack.isEmpty()).toBe(true);
  });

  test('Calling isEmpty should return false', () => {
    const stack = new Stack();
    stack.add(1);
    stack.add(2);
    stack.add(3);
    stack.remove();
    stack.remove();
    expect(stack.isEmpty()).toBe(false);
  });
});