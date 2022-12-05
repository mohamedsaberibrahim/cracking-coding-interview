// time complexity: O(N^2)
// space complexity: O(1)

function swap (matrix, i, j) {
    const temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
  
  function rotateMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
        swap(matrix, i, j);
      }
    }
  }
  
  const main = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    rotateMatrix(matrix);
    console.log(matrix); // [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]
  };
    
  main();
    