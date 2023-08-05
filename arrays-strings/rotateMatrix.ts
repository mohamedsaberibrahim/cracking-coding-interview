// time complexity: O(N^2)
// space complexity: O(1)

function swap (matrix, i, j) {
  const temp = matrix[i][j];
  matrix[i][j] = matrix[j][i];
  matrix[j][i] = temp;
}

export function rotateMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      swap(matrix, i, j);
    }
  }
}
