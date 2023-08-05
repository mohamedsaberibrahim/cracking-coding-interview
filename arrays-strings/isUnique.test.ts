/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { isUnique } from "./isUnique";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(isUnique("Hello World")).toBe(false);
    });

    test('Test #1', () => {
        // test code goes here
        expect(isUnique("Helo Wrd")).toBe(true);
    });
});