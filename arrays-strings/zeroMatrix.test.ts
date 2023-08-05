/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { zeroMatrix } from "./zeroMatrix";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      const matrix = [[1, 2, 3, 1], [4, 5, 6, 1], [0, 8, 9, 14]];
      zeroMatrix(matrix);
      expect(matrix).toStrictEqual([ [ 0, 2, 3, 1 ], [ 0, 5, 6, 1 ], [ 0, 0, 0, 0 ] ]);
    });
});