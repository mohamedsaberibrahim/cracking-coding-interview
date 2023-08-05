/**
 * Tree
 *
 * A tree implementation on TS using nodes.
 */

import { rotateMatrix } from "./rotateMatrix";

describe('Tree test cases', () => {
    test('Test #1', () => {
      // test code goes here
      const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
      rotateMatrix(matrix);
      expect(matrix).toStrictEqual([ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]);
    });
});