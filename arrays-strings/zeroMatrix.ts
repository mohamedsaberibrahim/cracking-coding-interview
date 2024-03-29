// time complexity: O(N*M)
// space complexity: O(N + M)
// Can save rowHasZero, columnHasZero and use the first row, column for tracking the whole matrix
function fillZeros(matrix, pairs) {
    for (let p = 0; p < pairs.length; p++) {
      const index1 = pairs[p][0];
      const index2 = pairs[p][1];
        for (let i = 0; i < matrix[index1].length; i++) {
          matrix[index1][i] = 0;
        }
        for (let i = 0; i < matrix.length; i++) {
          matrix[i][index2] = 0;
        }
    }
  }
  
export function zeroMatrix(matrix) {
  let pairs = []; // array of rows and columns combined, can be splitted
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        pairs[count] = [i, j];
        count++;
      }
    }
  }
  fillZeros(matrix, pairs);
}
