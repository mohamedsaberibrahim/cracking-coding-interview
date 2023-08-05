/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { isRotation } from "./isRotation";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      expect(isRotation("waterbottle", "erbottlewat")).toBe(true);
    });
});