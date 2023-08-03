const StackWithMinimum = require('./stackWithMinimum');

describe('StackWithMinimum', () => {
    test('Returns the minimum with one element', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.push(10);
        expect(stackWithMinimum.min()).toBe(10);
    });

    test('Returns the minimum after multiple pushes', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.push(10);
        stackWithMinimum.push(7);
        stackWithMinimum.push(5);
        stackWithMinimum.push(2);
        expect(stackWithMinimum.min()).toBe(2);
    });

    test('Returns the minimum after multiple pushes/pops', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.push(10);
        stackWithMinimum.push(7);
        stackWithMinimum.push(5);
        stackWithMinimum.push(2);
        stackWithMinimum.pop();
        stackWithMinimum.pop();
        expect(stackWithMinimum.min()).toBe(7);
    });
});
