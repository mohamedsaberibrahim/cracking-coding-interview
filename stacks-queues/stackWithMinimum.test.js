const StackWithMinimum = require('./stackWithMinimum');

describe('StackWithMinimum', () => {
    test('Returns the minimum with one element', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.add(10);
        expect(stackWithMinimum.min()).toBe(10);
    });

    test('Returns the minimum after multiple pushes', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.add(10);
        stackWithMinimum.add(7);
        stackWithMinimum.add(5);
        stackWithMinimum.add(2);
        expect(stackWithMinimum.min()).toBe(2);
    });

    test('Returns the minimum after multiple pushes/removes', () => {
        const stackWithMinimum = new StackWithMinimum();
        stackWithMinimum.add(10);
        stackWithMinimum.add(7);
        stackWithMinimum.add(5);
        stackWithMinimum.add(2);
        stackWithMinimum.remove();
        stackWithMinimum.remove();
        expect(stackWithMinimum.min()).toBe(7);
    });
});
